/* Instituto Parroquial Nuestra Señora del Pilar — DEMO NO OFICIAL.
   V1.0.3: caché propia, precarga sin HTTP cache, navegación network-first. */
const PREFIX='marktech-horario-parroquial-pilar-demo-';
const CACHE_NAME=PREFIX+'v1.0.3';
const SHELL=['./index.html','./manifest.webmanifest','./version.json',
  './icon-192.png','./icon-512.png','./apple-touch-icon.png',
  './banner-instituto-parroquial-pilar-v103.png','./icon-maskable-512.png',
  './favicon-48.png','./qr-horario.png'];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    // cache:'reload' evita precachear una copia antigua de index.html / banner.
    await cache.addAll(SHELL.map(path=>new Request(new URL(path,self.registration.scope),{cache:'reload'})));
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const names=await caches.keys();
    await Promise.all(names.filter(name=>name.startsWith(PREFIX)&&name!==CACHE_NAME).map(name=>caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url),root=new URL('./',self.registration.scope);
  if(url.origin!==self.location.origin||!url.pathname.startsWith(root.pathname))return;
  if(url.pathname.endsWith('/version.json')){
    event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match('./version.json')));
    return;
  }
  if(req.mode==='navigate'||url.pathname.endsWith('/index.html')){
    event.respondWith((async()=>{
      try{
        const response=await fetch(req,{cache:'no-store'});
        if(response.ok){
          const cache=await caches.open(CACHE_NAME);
          await cache.put(new URL('./index.html',root),response.clone());
        }
        return response;
      }catch(_){
        return (await caches.match(new URL('./index.html',root)))||Response.error();
      }
    })());
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
});
