// Mobile Menu Toggle
function toggleMenu(){
    document.getElementById("nav-links").classList.toggle("active");
}

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    hiddenElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add("show");
        }
    });
});