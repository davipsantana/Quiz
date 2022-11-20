var sec=0
var min=0
var hr=0
var interval


//Foi criado OBJETO para cada pergunta, que servem para guardarem valores nomeados de dados
const p1 = {
    "numero": 1,
    "enunciado": "O peixe nemo, de procurando nemo é de que especie?",
    "ra": "COLISA",
    "rb": "PEIXE-PALHAÇO", //ok
    "rc": "KINGUIO",
    "rd": "ANÊMONA",
    "resposta": "PEIXE-PALHAÇO"
}

const p2 = {
    "numero": 2,
    "enunciado": "Qual destas palavras não é sinonimo de \"DESABRIGADO\"", //Nos valores dos obejtos toda vez que se for usar "" é necessario usar / para para não se criar um elemento no programa.
    "ra": "ABANDONADO",
    "rb": "CHATO", //ok
    "rc": "EXPOSTO",
    "rd": "VULNERAVEL",
    "resposta": "CHATO"
}
//onde cada obejtos tem o enuciado e as alternativas
const p3 = {
    "numero": 3,
    "enunciado": "Asparagicultura é o cultivo de qual planta?",
    "ra": "MANJERICÃO",
    "rb": "QUIABO",
    "rc": "JILÓ",
    "rd": "ASPARGO", //ok
    "resposta": "ASPARGO "
}

const p4 ={
    "numero": 4,
    "enunciado": "Romeu e Julieta é uma sobremesa composta por...",
    "ra": "CHOCOLATE E HORTELÃ",
    "rb": "CHOCOLATE E PIMENTA",
    "rc": "GOIABADA E QUEIJO", //ok
    "rd": "QUEIJO E CHOCOLATE",
    "resposta": "GOIABADA E QUEIJO"
}
const p5 ={
    "numero": 5,
    "enunciado": "Uma aranha tem 8 patas, duas aranhas vão ter quantas patas?",
    "ra": "16", //ok
    "rb": "22",
    "rc": "26",
    "rd": "28",
    "resposta": "16"
    
}
const p6 ={
    "numero": 6,
    "enunciado": "Que tipo de animal é a cegonha",
    "ra": "RÉPTIL",
    "rb": "AVE", //ok
    "rc": "MAMÍFERO",
    "rd": "ANFIBIO",
    "resposta": "AVE"
}



//todo array se inicia pela posição 0 entao na let abaixo definimos por qual se inicia
let indice = 1;

// abaixo temos o nosso array, onde difente de objetos que temos valores nomeados para cada elemento, no array temos somente elementos em cada posição.
const perguntas = [p1, p2, p3, p4, p5, p6];


//esssa função serve para que sempre a pagina carregue se inicia um função que eu declare.
window.onload = function ()  { 
    start();

    inicializarPergunta()
}

function inicializarPergunta(){

    document.getElementById("enunciado").innerHTML = perguntas[0].enunciado;
    document.getElementById("ra").innerText = perguntas[0].ra;
    document.getElementById("imput-ra").value = perguntas[0].ra;
    document.getElementById("rb").innerText = perguntas[0].rb;
    document.getElementById("imput-rb").value = perguntas[0].rb;
    document.getElementById("rc").innerText = perguntas[0].rc;
    document.getElementById("imput-rc").value = perguntas[0].rc;
    document.getElementById("rd").innerText = perguntas[0].rd;
    document.getElementById("imput-rd").value = perguntas[0].rd;
    document.getElementById("confirmar").value = perguntas[0].numero;

}
 //a função abaixo é a parte logica do cronomentro
function twoDigital(digit){
    if(digit<10){
        return['0'+digit]
    }else{
        return[digit]
    }
}

function start(){
    
    wacth()
    interval = setInterval(wacth,1000)

}

function stp(){
    clearInterval(interval)

    sec=0
    min=0
    document.getElementById("wacth").innerText="00:00:00"

 }



 function wacth(){
   sec++
   if(sec==60){
      min++
      sec=0 
      if(min==60){
          min=0
          hr++
      }
    }

    document.getElementById("wacth").innerText=twoDigital(hr)+":"+twoDigital(min)+":"+twoDigital(sec)

 }
//a parte logica do relogio termina aqui

function confirmar(){

    //lenght é um função que pega o tamanho do array.
    if (indice >= perguntas.length) {
        window.location= "3.final.html"
        return; 

    }

    let numeroPergunta = document.getElementById("confirmar").value
    let resposta = document.querySelector("input[class=radio]:checked").value;
    let respostaCerta = perguntas[numeroPergunta - 1]


    if (resposta == respostaCerta.resposta){

        /*document.getElementsByClassName("true").style.display = ""
        document.getElementsByClassName("false").style.display = "none"*/
    
    }
    else{
    
       /* document.getElementsByClassName("true").style.display = "none"
        document.getElementsByClassName("false").style.display = ""*/
    
    }

    // o uso [] serve para referencia uma posição do arrray
    let pergunta = perguntas[indice];
    indice = indice + 1; //a cada vez que confirmamos a resposta somamos mais um 1 para irmos para proxima pergunta do array
    //abaixo iremos pegar somente o modelo definido no arquivo html atraves do id do label, e substiruirmos pelas perguntas definads no objeto.
    document.getElementById("enunciado").innerHTML = pergunta.enunciado;
    document.getElementById("ra").innerText = pergunta.ra;
    document.getElementById("imput-ra").value = pergunta.ra;
    document.getElementById("rb").innerText = pergunta.rb;
    document.getElementById("imput-rb").value = pergunta.rb;
    document.getElementById("rc").innerText = pergunta.rc;
    document.getElementById("imput-rc").value = pergunta.rc;
    document.getElementById("rd").innerText = pergunta.rd;
    document.getElementById("imput-rd").value = pergunta.rd;
    document.getElementById("confirmar").value = pergunta.numero;



}




/*
// Essa função serve para que quando eu inicie o programa sempre se inicie por essa parte do js//
(function(){
    document.getElementById("enunciado").innerHTML = perguntas[0].enunciado;
    document.getElementById("ra").innerText = perguntas[0].ra;
    document.getElementById("rb").innerText = perguntas[0].rb;
    document.getElementById("rc").innerText = perguntas[0].rc;
    document.getElementById("rd").innerText = perguntas[0].rd;
})()
*/
