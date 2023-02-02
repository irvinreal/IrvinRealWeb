const logotipo_nav = document.querySelector(".img-nav");
const ul = document.querySelector(".ul");
const proyectoWash = document.getElementsByClassName("wash");

const urlWash = new URL("./public/wash/index.html");
proyectoWash.setAttribute('href', urlWash )

// proyectoWash.addEventListener("click", function () {
//     let peticionWash = fetch("../public/index.html")
//     .then((res) => res.text())
//     .then((res) => console.log(res));
//     window.open(peticionWash);
// });

logotipo_nav.addEventListener("click", () => {
    if (ul.classList.contains("open")) {
        ul.classList.remove("open");
        ul.classList.remove("on");
        logotipo_nav.classList.remove("on");
    } else {
        ul.classList.add("open");
        ul.classList.add("on");
        logotipo_nav.classList.add("on");
    }
});

// let probando = window;
// console.log(probando);

