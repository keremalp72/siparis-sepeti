// let kavunSayac = 0;

// const btns = document.querySelectorAll(".btn");

// for (const btn of btns) {
//   btn.addEventListener("click", handleClick);
// }

// function handleClick() {
//   document.querySelector("#elma").innerText = "Elma";
//   document.querySelector("#armut").innerText = "Armut";
//   document.querySelector("#kavun").innerText = "kavun";
//   document.querySelector("#portakal").innerText = "Portakal";
//   document.querySelector("#karpuz").innerText = "Karpuz";
//   document.querySelector("#uzum").innerText = "Üzüm";
//   if (orderList.innerText == "Kavun"){
//     kavunSayac++;
//     console.log(kavunSayac)
//   }

// }

let elmaSayac = 1;
let armutSayac = 1;
let kavunSayac = 1;
let portakalSayac = 1;
let karpuzSayac = 1;
let uzumSayac = 1;

const elmaBtn = document.querySelector(".elma-btn");
const armutBtn = document.querySelector(".armut-btn");
const kavunBtn = document.querySelector(".kavun-btn");
const portakalBtn = document.querySelector(".portakal-btn");
const karpuzBtn = document.querySelector(".karpuz-btn");
const uzumBtn = document.querySelector(".uzum-btn");
const sifirlaBtn = document.querySelector(".sifirla");

elmaBtn.addEventListener("click", elmaClick);
armutBtn.addEventListener("click", armutClick);
kavunBtn.addEventListener("click", kavunClick);
portakalBtn.addEventListener("click", portakalClick);
karpuzBtn.addEventListener("click", karpuzClick);
uzumBtn.addEventListener("click", uzumClick);
sifirlaBtn.addEventListener("click", sifirla);

function elmaClick() {
  document.querySelector("#elma").innerText = `Elma X ${elmaSayac}`;
  elmaSayac++;
}
function armutClick() {
  document.querySelector("#armut").innerText = `Armut X ${armutSayac}`;
  armutSayac++;
}
function kavunClick() {
  document.querySelector("#kavun").innerText = `Kavun X ${kavunSayac}`;
  kavunSayac++;
}
function portakalClick() {
  document.querySelector("#portakal").innerText = `Portakal X ${portakalSayac}`;
  portakalSayac++;
}
function karpuzClick() {
  document.querySelector("#karpuz").innerText = `Karpuz X ${karpuzSayac}`;
  karpuzSayac++;
}
function uzumClick() {
  document.querySelector("#uzum").innerText = `Üzüm X ${uzumSayac}`;
  uzumSayac++;
}
function sifirla() {
  document.querySelector("#elma").innerText = "";
  elmaSayac =1;
  document.querySelector("#armut").innerText = "";
  armutSayac =1;
  document.querySelector("#kavun").innerText = "";
  kavunSayac =1;
  document.querySelector("#portakal").innerText = "";
  portakalSayac =1;
  document.querySelector("#karpuz").innerText = "";
  karpuzSayac =1;
  document.querySelector("#uzum").innerText = "";
  uzumSayac =1;
}
