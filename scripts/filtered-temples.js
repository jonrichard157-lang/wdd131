// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-915442-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768407-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-149463-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-exterior-1478548.jpg"
    }
];

// DOM Selectors
const gallery = document.querySelector("#temple-gallery") || document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title") || document.querySelector("h1");
const navLinks = document.querySelectorAll("#primary-nav a");
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#primary-nav");

// Helper function to extract dedication year
function getDedicationYear(dedicatedString) {
    const yearPart = dedicatedString.split(",")[0].trim();
    return parseInt(yearPart, 10);
}

// Function to generate and display temple cards dynamically
function createTempleCard(templeList) {
    if (!gallery) return;

    gallery.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

// Navigation filtering event listeners
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Update active link styling
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        const filter = link.textContent.trim().toLowerCase();
        let filteredTemples = [];

        switch (filter) {
            case "old":
                if (pageTitle) pageTitle.textContent = "Old Temples";
                filteredTemples = temples.filter((temple) => getDedicationYear(temple.dedicated) < 1900);
                break;
            case "new":
                if (pageTitle) pageTitle.textContent = "New Temples";
                filteredTemples = temples.filter((temple) => getDedicationYear(temple.dedicated) > 2000);
                break;
            case "large":
                if (pageTitle) pageTitle.textContent = "Large Temples";
                filteredTemples = temples.filter((temple) => temple.area > 90000);
                break;
            case "small":
                if (pageTitle) pageTitle.textContent = "Small Temples";
                filteredTemples = temples.filter((temple) => temple.area < 10000);
                break;
            case "home":
            default:
                if (pageTitle) pageTitle.textContent = "Home";
                filteredTemples = temples;
                break;
        }

        createTempleCard(filteredTemples);

        // Close mobile navigation menu if open
        if (nav && nav.classList.contains("open")) {
            nav.classList.remove("open");
            if (hamburger) {
                hamburger.setAttribute("aria-expanded", "false");
                hamburger.textContent = "☰";
            }
        }
    });
});

// Responsive hamburger menu
if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
        const isOpen = nav.classList.contains("open");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        hamburger.textContent = isOpen ? "❌" : "☰";
    });
}

// Dynamic footer copyright year
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Dynamic footer last modified date
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

// Initial display: show all temples
createTempleCard(temples);
