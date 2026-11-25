# Instituto Parroquial Nuestra Señora del Pilar — V1.0.3 DE PRUEBA

Corrección de persistencia del banner y aviso repetitivo de actualización.

Se usó como base la V1.0.2 publicada en GitHub (los SHA originales coincidían exactamente).

Cambios:
- Nuevo banner sin marcos dibujados; solo borde exterior de la PWA.
- Banner con nombre único `banner-instituto-parroquial-pilar-v103.png` para invalidar imágenes viejas.
- `service-worker.js` con versión de caché V1.0.3, instalación `cache: reload`, navegación network-first.
- Aviso solo si la versión publicada es numéricamente MAYOR. No avisar solo por SW waiting.
- Botón Actualizar: refresco de origen con URL única, elimina solo cachés de esta PWA, conserva localStorage.
- Misma identidad de PWA, horarios, materias, cursos, idiomas, selector y tema.

Publicar el contenido de este ZIP en la raíz del repositorio existente, sobreescribiendo archivos.
No está publicado y requiere confirmación del usuario para ser estable.

# Instituto Parroquial Nuestra Señora del Pilar — Horario Escolar V1.0.2 (DEMO, DE PRUEBA)

**Aviso de identidad:** Propuesta independiente y NO OFICIAL de MARK-TECH SOFTWARE.
Colegio real: Instituto Parroquial Nuestra Señora del Pilar, Belgrano 556, Pilar, Buenos Aires.
No confundir con el Colegio del Pilar ni con instituciones homónimas de Ituzaingó, CABA o Córdoba.

**Información ficticia:** Los 12 cursos simulados (1.º–6.º, A/B), la asignación de turnos, las materias y todos los horarios fueron creados a efectos demostrativos. No están avalados por el colegio y no deben usarse para planificar una jornada real. El emblema NP y el banner son referenciales; **no son el escudo institucional**.

Características: 6 idiomas (es/en/pt/fr/de/it), 3 temas, 12 horarios simulados, indicador Hoy, clase y recreo en curso, compartir por WhatsApp/QR, PWA instalable y offline.

Archivos: index.html, manifest.webmanifest, service-worker.js, version.json, logotipo, iconos y vista HTML autónoma.

## GitHub Pages
Crear repositorio público llamado `horario-escolar-parroquial-pilar`, habilitar Pages en rama main y carpeta raíz, y subir **el contenido** del ZIP a la raíz (no solo el ZIP).
URL prevista: https://marcepilar.github.io/horario-escolar-parroquial-pilar/
El QR local está codificado hacia esa URL prevista y no será útil hasta que se publique el repositorio. Cuando la PWA está publicada, el selector Compartir genera el QR de la URL efectiva (requiere conexión para el proveedor externo de QR).

**V1.0.2 anterior**: no publicamos ni declaramos estable hasta aprobación explícita. Verificar instalación en dispositivo físico antes de presentar a la institución.

## Cambios V1.0.2 (visual)
- Refinamiento del banner institucional ilustrativo (sin afirmar autenticidad del escudo).
- Mejor contraste y relieve sutil en botonera, año, banda de turno y tarjetas de materias.
- Sin cambios en contenido, seis idiomas, tres temas, doce cursos, interacciones, PWA ni horarios ficticios.
- Versión de prueba pendiente de evaluación; no publicada.

## V1.0.2 — Corrección del banner
Se reemplazó físicamente la imagen del banner por un diseño dorado/navy totalmente nuevo, tanto en index.html como en la vista interactiva autónoma. El caché de servicio ahora usa V1.0.2. El símbolo mostrado es ilustrativo, no oficial. No publicado.
