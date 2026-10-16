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
        img: "https://pinimg.com"
    },
    {
        id: 4,
        title: "Salmón Grillado Glaseado",
        category: "fuertes",
        price: "\$29",
        desc: "Acompañado de espárragos tiernos, cítricos y reducción de miel silvestre.",
        img: "https://pinimg.com"
    },
    {
        id: 5,
        title: "Volcán de Chocolate Fondant",
        category: "postres",
        price: "\$12",
        desc: "Núcleo líquido de cacao al 70%, helado artesanal de vainilla de Madagascar.",
        img: "https://pinimg.com"
    },
    {
        id: 6,
        title: "Mousse de Maracuyá Cítrico",
        category: "postres",
        price: "\$10",
        desc: "Textura ligera con notas tropicales, crocante de pistacho y menta fresca.",
        img: "https://pinimg.com"
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
