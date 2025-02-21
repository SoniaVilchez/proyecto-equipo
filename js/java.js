// Script para el slider de imágenes
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.slider-image');
    let currentImage = 0;

    function nextImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }

    setInterval(nextImage, 5000); // Cambia la imagen cada 5 segundos
});

// Script para insertar el texto del enlace copiando el contenido href
document.addEventListener("DOMContentLoaded", () => {
    const webLink = document.getElementById('company-web');
    if (webLink) {
        webLink.textContent = webLink.href;
    }
});

// Buscador en el index principal
function searchCategories() {
    let input = document.getElementById('search').value.toLowerCase().trim();
    let items = document.querySelectorAll('.category-item');

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "flex" : "none";
        if (text.includes(input)) {
            item.style.flexDirection = "column"; // Mantiene el diseño adecuado
        }
    });
}

// Buscador en diferentes categorías
function searchBusinesses() {
    let input = document.getElementById('search').value.toLowerCase().trim();
    let businessCards = document.querySelectorAll('.business-card');

    businessCards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

// Carga dinámica de menú desde API ficticia
document.addEventListener("DOMContentLoaded", async () => {
    const menu = document.getElementById("menu");

    if (!menu) return;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Error en la carga de datos");

        const data = await response.json();

        // Crear elementos dinámicos del menú
        menu.innerHTML = ""; 
        data.slice(0, 5).forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            menu.appendChild(li);
        });
    } catch (error) {
        menu.innerHTML = "<li>Error al cargar el menú</li>";
        console.error("Error al obtener los datos:", error);
    }
});
