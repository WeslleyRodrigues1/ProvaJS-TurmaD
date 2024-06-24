document.getElementById("weslley")
let NomeDaPessoa = document.getElementById("weslley");
let texto = document.getElementById("textoEnvio");

function Enviar()
{
    texto.innerHTML = "Olá, " + NomeDaPessoa.value + " Tudo bem?";
}

let conversao = document.getElementById("conversão");
let weslley = document.getElementById("Resultado")
let  converter = document.getElementById("converter");

function Resultado()
{
    converter.innerHTML = parseInt(conversão.value) / 100
}

let numero = document.getElementById("numero");
let proximo = document.getElementById("Sucessor");
let anterior = document.getElementById("Antecessor");

function calcular()
{
    proximo.innerHTML = parseInt(numero.value) + 1;
    anterior.innerHTML = parseInt(numero.value) - 1;
}

let maior = document.getElementById("maior");
let menor = document.getElementById("menor");
let defina = document.getElementById("defina");

function valor()
{
    if(maior.value < menor.value )
        {
            defina.innerHTML = maior.value
        }
    else
        {
            defina.innerHTML = menor.value
        }
}

let  = document.getElementById("salario");
let  = document.getElementById("aumento");
let  = document.getElementById("porcento");

function aumento()
{
    if(maior.value < menor.value )
        {
            defina.innerHTML = maior.value
        }
    else
        {
            defina.innerHTML = menor.value
        }
}

let  = document.getElementById("salario");
let  = document.getElementById("aumento");
let  = document.getElementById("porcento");

function aumento()
{
    if(salario.value > 1250)
        {
            salario.innerHTML = + (( parseInt( salario.value ) - 1250) * 100/10)
        }
    else
        {
            salario.innerHTML = + (( parseInt( salario.value ) - 1250)* 100/15)
        }
}

var c = 1;
while(c <= 100)
    {
        console.log(c)
        c = c + 1;
    }

var c = 0;
    while(c <= 50)
        {
            console.log(c)
            c = c + 5;
        }

var a = 100;
while (a > -10)
    {
        console.log(a)
        a = a - 10;
    }