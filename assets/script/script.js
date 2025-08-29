
function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".links").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}


const header = document.getElementById("myHeader");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
