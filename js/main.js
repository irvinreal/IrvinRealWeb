// const logotipo_nav = document.querySelector(".img-nav");
// const ul = document.querySelector(".ul");
// const proyectoWash = document.getElementsByClassName("wash");

// const urlWash = new URL("./public/wash/index.html");
// proyectoWash.setAttribute('href', urlWash )

// proyectoWash.addEventListener("click", function () {
//     let peticionWash = fetch("../public/index.html")
//     .then((res) => res.text())
//     .then((res) => console.log(res));
//     window.open(peticionWash);
// });

// logotipo_nav.addEventListener("click", () => {
//     if (ul.classList.contains("open")) {
//         ul.classList.remove("open");
//         ul.classList.remove("on");
//         logotipo_nav.classList.remove("on");
//     } else {
//         ul.classList.add("open");
//         ul.classList.add("on");
//         logotipo_nav.classList.add("on");
//     }
// });

// let probando = window;
// console.log(probando);
// /////////////////////////////////////////////////////////////////////////
// const primerSaludo = document.querySelector(".primerSaludo");
// // const segundoSaludo = document.querySelector(".segundoSaludo");
// // const tercerSaludo = document.querySelector(".tercerSaludo");

// const h4 = document.querySelector(".h4");


// let strPrimerSaludo = "Hola Mundo";
// // let strSegundoSaludo = "Bienvenidos al Sitio";
// // let strTercerSaludo = "Esta es una prueba de html, css y javascript";

// let writingPrimerSaludo = (str) => {
//     let arrFromStr = str.split("");
//     let i = 0;
//     let printStr = setInterval(function () {
//         primerSaludo.innerHTML += arrFromStr[i];
//         console.log(arrFromStr[i]);
//         i++;
//         if (i === arrFromStr.length) {
//             clearInterval(printStr);
//             // setTimeout(function () {
//             //     // h4.classList.add("bg-dark");
//             //     // primerSaludo.classList.add("bg-dark-text");
//             // }, 300);
//         }
//     }, 180);
// };
// writingPrimerSaludo("About me ..");