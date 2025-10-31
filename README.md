# Galería de Imágenes Personal

¡Bienvenido a mi Galería de Imágenes Personal! Una aplicación web interactiva desarrollada con HTML, CSS, Bootstrap y JavaScript que muestra una colección de mis fotografías organizadas por categorías personales.

## Características

- **Diseño Responsivo**: Se adapta perfectamente a cualquier dispositivo móvil, tableta o computadora.
- **Galería Interactiva**: Explora mis fotografías organizadas en categorías personales como aventuras, playas, ciudad y más.
- **Filtro por Categorías**: Fácil navegación entre diferentes tipos de fotografías.
- **Vista Detallada**: Amplía cada imagen para verla en todo su esplendor con su descripción y fecha.
- **Sección Personal**: Conoce más sobre mí, mis intereses y mi trayectoria profesional.
- **Formulario de Contacto**: Envíame un mensaje directamente desde la página.

## Tecnologías Utilizadas

- **HTML5**: Para una estructura semántica y accesible.
- **CSS3**: Para estilos personalizados y animaciones suaves.
- **Bootstrap 5**: Framework CSS para un diseño responsive y componentes modernos.
- **JavaScript Vanilla**: Para la interactividad, validación de formularios y manipulación del DOM.
- **Bootstrap Icons**: Para una interfaz más intuitiva con iconos profesionales.
- **Git**: Para el control de versiones del proyecto.

## Estructura del Proyecto

```
galeria-imagenes/
├── index.html          # Página de inicio
├── galeria.html        # Galería de imágenes
├── detalle.html        # Vista detallada de una imagen
├── sobre-nosotros.html # Información del equipo y formulario de contacto
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos personalizados
│   ├── js/
│   │   └── main.js     # Lógica de la aplicación
│   └── images/         # Imágenes del proyecto
└── README.md           # Este archivo
```

## Cómo Usar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador web.
3. Navega por las diferentes secciones usando el menú de navegación.

## Despliegue en GitHub Pages

Este proyecto está configurado para ser desplegado en GitHub Pages. Para publicar tu propia versión:

1. Crea un nuevo repositorio en GitHub.
2. Sube los archivos a tu repositorio.
3. Ve a la configuración del repositorio, selecciona la pestaña "Pages".
4. En "Source", selecciona la rama principal (main o master) y la carpeta `/ (root)`.
5. Haz clic en "Save".

## Personalización

### Cómo personalizar tu propia galería:

1. **Imágenes**: 
   - Reemplaza las imágenes en la carpeta `assets/images/`
   - Asegúrate de mantener los nombres de archivo o actualizar las referencias en `main.js`

2. **Datos de la galería**:
   - Modifica el array `galleryData` en `assets/js/main.js`
   - Añade o elimina categorías según tus necesidades
   - Actualiza la información de cada imagen (título, descripción, fecha, etc.)

3. **Información personal**:
   - Actualiza la sección "Sobre Mí" en `sobre-nosotros.html`
   - Modifica la información de contacto en el pie de página

4. **Estilos**:
   - Personaliza colores, fuentes y estilos en `assets/css/styles.css`
   - Ajusta los breakpoints para diferentes tamaños de pantalla si es necesario

## Estructura del Código

El proyecto sigue una estructura modular y organizada:

- **HTML**: Cada página tiene su propio archivo HTML con estructura semántica.
- **CSS**: Estilos organizados por componentes y páginas.
- **JavaScript**: 
  - `main.js` contiene toda la lógica de la aplicación
  - Incluye funciones para cargar la galería, filtrar imágenes y validar formularios
  - Manejo de eventos y manipulación del DOM

## Despliegue

Puedes desplegar este proyecto en cualquier servicio de hosting estático como:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ por Edward Garcia para el Diplomado BIT de Desarrollo Web.

## Contacto

- Correo: egarciag97@hotmail.com
- Teléfono: +57 3015820854
