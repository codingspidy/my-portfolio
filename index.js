const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar");
const body = document.querySelector("body");
const links = document.querySelectorAll(".navbar li");

btn.addEventListener("click", () => {
    document.querySelectorAll(".menu-btn span").forEach((span) => {
        span.classList.toggle("open");
    })

    nav.classList.toggle("open");

    body.classList.toggle("fixed-position");
})

if(window.matchMedia("(max-width: 1023px)").matches) {
    links.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open")
            body.classList.remove("fixed-position");
            document.querySelectorAll(".menu-btn span").forEach((span) => {
            span.classList.remove("open");
            })
        })
    })
}



