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

// Responsive hamburger menu functionality
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#primary-nav");

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
        const isOpen = nav.classList.contains("open");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        hamburger.textContent = isOpen ? "❌" : "☰";
    });
}
