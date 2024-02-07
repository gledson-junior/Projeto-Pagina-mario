let EntrarContato = document.querySelector(".mario-form")
let MascaraForm = document.querySelector(".mascara")
let NossosServicos = document.querySelector(".servicos")

console.log(EntrarContato)
console.log(EnviarForm)

function FaleConosco() {
    EntrarContato.style.left = "50%"
    EntrarContato.style.transform = "translateX(-50%)"
    MascaraForm.style.visibility = "visible"
}

function cliquemascara() {
    EntrarContato.style.left = "-290px"
    MascaraForm.style.visibility = "hidden"
}

function Servicos() {
    NossosServicos.style.bottom = "40%"
    MascaraForm.style.visibility = "visible"
}

function cliquemascara2() {
    MascaraForm.style.visibility = "hidden"
    NossosServicos.style.bottom = "-40%"
}