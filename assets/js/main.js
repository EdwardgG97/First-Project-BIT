// Datos de la galería personalizada de Edward Garcia
const galleryData = [
    {
        id: 1,
        title: 'Aventura en la Montaña',
        category: 'aventuras',
        image: 'assets/images/montana.jpg',
        author: 'Edward Garcia',
        description: 'Disfrutando de las increíbles vistas durante una caminata por la montaña.',
        date: '15/03/2024'
    },
    {
        id: 2,
        title: 'Atardecer en la Playa',
        category: 'playas',
        image: 'assets/images/playa.jpg',
        author: 'Edward Garcia',
        description: 'Un hermoso atardecer que capturé durante mis vacaciones en la costa.',
        date: '22/07/2024'
    },
    {
        id: 3,
        title: 'Exploración Urbana',
        category: 'ciudad',
        image: 'assets/images/ciudad.jpg',
        author: 'Edward Garcia',
        description: 'Recorriendo las calles de la ciudad y descubriendo sus rincones ocultos.',
        date: '05/09/2024'
    },
    {
        id: 4,
        title: 'Naturaleza Viva',
        category: 'naturaleza',
        image: 'assets/images/naturaleza.jpg',
        author: 'Edward Garcia',
        description: 'La belleza de la naturaleza en su máximo esplendor.',
        date: '12/10/2024'
    },
    {
        id: 5,
        title: 'Gastronomía Local',
        category: 'gastronomia',
        image: 'assets/images/comida.jpg',
        author: 'Edward Garcia',
        description: 'Degustando la deliciosa gastronomía local durante mis viajes.',
        date: '28/10/2024'
    }
];

// Categorías disponibles
const categories = [
    { id: 'todos', name: 'Todos', icon: 'grid' },
    { id: 'aventuras', name: 'Aventuras', icon: 'geo-alt' },
    { id: 'playas', name: 'Playas', icon: 'umbrella' },
    { id: 'ciudad', name: 'Ciudad', icon: 'building' },
    { id: 'naturaleza', name: 'Naturaleza', icon: 'tree' },
    { id: 'gastronomia', name: 'Gastronomía', icon: 'cup-hot' }
];

// Función para cargar imágenes destacadas en la página de inicio
function loadFeaturedImages() {
    const featuredContainer = document.getElementById('featured-images');
    
    if (featuredContainer) {
        // Tomar las primeras 3 imágenes como destacadas
        const featuredImages = galleryData.slice(0, 3);
        
        featuredImages.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="detalle.html?id=${item.id}" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            `;
            featuredContainer.appendChild(col);
        });
    }
}

// Función para cargar categorías en la página de inicio
function loadCategories() {
    const categoriesContainer = document.getElementById('categories');
    
    if (categoriesContainer) {
        categories.forEach(category => {
            const col = document.createElement('div');
            col.className = 'col-md-3 col-6 mb-4';
            col.innerHTML = `
                <div class="category-card" style="background-color: ${getRandomColor()}" 
                     onclick="filterGallery('${category.id}')">
                    <i class="bi bi-${category.icon} fs-1 mb-2"></i>
                    <h4>${category.name}</h4>
                </div>
            `;
            categoriesContainer.appendChild(col);
        });
    }
}

// Función para cargar la galería completa
function loadGallery(filterCategory = 'todos') {
    const galleryContainer = document.getElementById('gallery');
    
    if (galleryContainer) {
        galleryContainer.innerHTML = ''; // Limpiar la galería
        
        const filteredImages = filterCategory === 'todos' 
            ? galleryData 
            : galleryData.filter(item => item.category === filterCategory);
        
        if (filteredImages.length === 0) {
            galleryContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-info">
                        No hay imágenes en esta categoría. Prueba con otra categoría.
                    </div>
                </div>
            `;
            return;
        }
        
        filteredImages.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-4 col-sm-6 mb-4 animate-fade-in';
            
            // Crear elemento de imagen con manejo de errores
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            img.className = 'img-fluid rounded shadow-sm';
            img.style.height = '250px';
            img.style.width = '100%';
            img.style.objectFit = 'cover';
            img.loading = 'lazy'; // Carga perezosa para mejor rendimiento
            
            // Manejar errores de carga de imagen
            img.onerror = function() {
                this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23f8f9fa%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22300%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20alignment-baseline%3D%22middle%22%20fill%3D%22%236c757d%22%3EImagen%20no%20disponible%3C%2Ftext%3E%3C%2Fsvg%3E';
                this.alt = 'Imagen no disponible';
            };
            
            col.innerHTML = `
                <div class="card h-100 shadow-sm" onclick="showImageDetail(${item.id})">
                    <!-- Imagen con estilos mejorados -->
                    <div style="height: 200px; overflow: hidden; display: flex; align-items: center;">
                        ${img.outerHTML}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text text-muted">
                            <small>
                                <i class="bi bi-calendar3 me-1"></i> ${item.date} | 
                                <i class="bi bi-person ms-2 me-1"></i> ${item.author}
                            </small>
                        </p>
                        <span class="badge bg-primary">${item.category}</span>
                    </div>
                </div>
            `;
            
            galleryContainer.appendChild(col);
        });
    }
}

// Función para mostrar el detalle de una imagen
function showImageDetail(imageId) {
    // Guardar el ID en el almacenamiento local para usarlo en la página de detalle
    localStorage.setItem('currentImageId', imageId);
    window.location.href = 'detalle.html';
}

// Función para cargar el detalle de la imagen
function loadImageDetail() {
    const detailContainer = document.getElementById('image-detail');
    
    if (detailContainer) {
        const imageId = parseInt(localStorage.getItem('currentImageId') || '1');
        const image = galleryData.find(item => item.id === imageId) || galleryData[0];
        
        if (!image) {
            detailContainer.innerHTML = `
                <div class="alert alert-danger">
                    <h4>¡Ups! Algo salió mal</h4>
                    <p>No se pudo cargar la imagen solicitada.</p>
                    <a href="galeria.html" class="btn btn-primary">
                        <i class="bi bi-arrow-left"></i> Volver a la galería
                    </a>
                </div>
            `;
            return;
        }
        
        detailContainer.innerHTML = `
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card shadow-sm">
                        <div class="ratio ratio-16x9">
                            <img src="${image.image}" 
                                 alt="${image.title}" 
                                 class="img-fluid rounded-top"
                                 onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23f8f9fa%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22300%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20alignment-baseline%3D%22middle%22%20fill%3D%22%236c757d%22%3EImagen%20no%20disponible%3C%2Ftext%3E%3C%2Fsvg%3E'"
                                 loading="lazy">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h1 class="h3 mb-3">${image.title}</h1>
                            
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-3">
                                    <i class="bi bi-person-circle fs-3 text-primary"></i>
                                </div>
                                <div>
                                    <p class="mb-0 text-muted">Autor</p>
                                    <p class="mb-0 fw-bold">${image.author}</p>
                                </div>
                            </div>
                            
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-3">
                                    <i class="bi bi-calendar3 fs-5 text-primary"></i>
                                </div>
                                <div>
                                    <p class="mb-0 text-muted">Fecha</p>
                                    <p class="mb-0">${image.date}</p>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <span class="badge bg-primary">${image.category}</span>
                            </div>
                            
                            <div class="card bg-light p-3 mb-4">
                                <h6 class="text-uppercase text-muted mb-2">Descripción</h6>
                                <p class="mb-0">${image.description}</p>
                            </div>
                            
                            <div class="d-grid gap-2">
                                <button onclick="window.history.back()" class="btn btn-outline-primary">
                                    <i class="bi bi-arrow-left"></i> Volver a la galería
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Función para filtrar la galería por categoría
function filterGallery(category) {
    loadGallery(category);
    
    // Actualizar el botón activo
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Función para validar el formulario de contacto
function validateContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validación simple
        if (!name || !email || !message) {
            showAlert('Por favor, completa todos los campos.', 'danger');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Por favor, ingresa un correo electrónico válido.', 'warning');
            return;
        }
        
        // Simular envío exitoso
        showAlert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
        form.reset();
    });
}

// Función auxiliar para validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para mostrar alertas
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const container = document.querySelector('.container');
    container.insertBefore(alertDiv, container.firstChild);
    
    // Eliminar la alerta después de 5 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Función para generar colores aleatorios para las categorías
function getRandomColor() {
    const colors = [
        '#3498db', '#2ecc71', '#e74c3c', '#9b59b6', 
        '#f1c40f', '#e67e22', '#1abc9c', '#d35400'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cargar contenido según la página actual
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (page === 'index.html' || page === '') {
        loadFeaturedImages();
        loadCategories();
    } else if (page === 'galeria.html') {
        loadGallery();
    } else if (page === 'detalle.html') {
        loadImageDetail();
    } else if (page === 'sobre-nosotros.html') {
        validateContactForm();
    }
});
