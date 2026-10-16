// Base de datos del menú con enlaces de imágenes estéticas de Pinterest
const menuItems = [
    {
        id: 1,
        title: "Tártaro de Atún Rojo",
        category: "entradas",
        price: "\$18",
        desc: "Atún fresco marinado en sésamo, aguacate cremoso y perlas de soya.",
        img: "https://i.pinimg.com/1200x/2b/52/3e/2b523efe25e19f507a9efa0727cf6da6.jpg"
    },
    {
        id: 2,
        title: "Croquetas de Jamón Ibérico",
        category: "entradas",
        price: "\$14",
        desc: "Bechamel fluida, rebozado crujiente y velo de jamón ibérico de bellota.",
        img: "https://i.pinimg.com/1200x/6a/54/f3/6a54f3cbff1a3448b0eb601ec5bdbd1f.jpg"
    },
    {
        id: 3,
        title: "Filet Mignon en Costra",
        category: "fuertes",
        price: "\$34",
        desc: "Corte premium con reducción de vino tinto, trufa negra y puré rústico.",
        img: "https://i.pinimg.com/1200x/0c/04/b1/0c04b1262e852afe55785f2b01fce9d5.jpg"
    },
    {
        id: 4,
        title: "Salmón Grillado Glaseado",
        category: "fuertes",
        price: "\$29",
        desc: "Acompañado de espárragos tiernos, cítricos y reducción de miel silvestre.",
        img: "https://i.pinimg.com/1200x/02/1c/81/021c8171228d699d6e84dc2c818c0271.jpg"
    },
    {
        id: 5,
        title: "Volcán de Chocolate Fondant",
        category: "postres",
        price: "\$12",
        desc: "Núcleo líquido de cacao al 70%, helado artesanal de vainilla de Madagascar.",
        img: "https://i.pinimg.com/736x/5e/7e/fa/5e7efa40ae28c20a6af595c9cb70b9b2.jpg"
    },
    {
        id: 6,
        title: "Mousse de Maracuyá Cítrico",
        category: "postres",
        price: "\$10",
        desc: "Textura ligera con notas tropicales, crocante de pistacho y menta fresca.",
        img: "https://i.pinimg.com/1200x/12/cc/06/12cc06a4527c92a17ae3808143764b34.jpg"
    }
];

const menuGallery = document.getElementById("menu-gallery");
const filterBtns = document.querySelectorAll(".filter-btn");

// Función para mostrar los elementos en el HTML
function displayMenuItems(items) {
    let displayMenu = items.map((item) => {
        return `
            <article class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="menu-img">
                <div class="menu-info">
                    <div class="menu-title-row">
                        <h3>${item.title}</h3>
                        <span class="menu-price">${item.price}</span>
                    </div>
                    <p>${item.desc}</p>
                </div>
            </article>
        `;
    }).join("");
    menuGallery.innerHTML = displayMenu;
}

// Carga inicial de todo el menú
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menuItems);
});

// Lógica de filtrado interactivo
filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Remover clase activa de los botones anteriores
        filterBtns.forEach(b => b.classList.remove("active"));
        // Agregar clase activa al botón presionado
        e.currentTarget.classList.add("active");

        const category = e.currentTarget.dataset.category;
        const menuCategory = menuItems.filter((item) => {
            if (item.category === category) {
                return item;
            }
        });

        if (category === "all") {
            displayMenuItems(menuItems);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

// Control de Envío de Formulario de Reservas
const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    alert(`¡Gracias, ${name}! Tu solicitud de reserva para ${guests} personas el día ${date} a las ${time} ha sido procesada con éxito.`);
    bookingForm.reset();
});
// Lógica para el Menú Móvil Desplegable
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

// Alternar la clase 'active' al hacer clic en el botón de hamburguesa
mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Cambia el icono de barras (menu) a una 'X' (cerrar) de forma interactiva
    const icon = mobileMenu.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// Cerrar el menú automáticamente cuando el usuario haga clic en una opción
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileMenu.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});

