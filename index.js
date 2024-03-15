
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let arrayLetter = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"], 
    ["u", "ufat"]
];

function encriptar(){
    let texto = document.getElementById("texto-input").value;
    for(i=0; i<5; i++){
        if(texto.includes(arrayLetter[i][0])){
            texto = texto.replaceAll(arrayLetter[i][0], arrayLetter[i][1])
        }
    }
   
    document.getElementById("img-muneco").style.display = "none";
    document.getElementById("texto-muneco-bold").style.display = "none";
    document.getElementById("p-request").innerText = texto;
}

function desencriptar(){
    let texto = document.getElementById("texto-input").value;
    for(i=0; i<5; i++){
        if(texto.includes(arrayLetter[i][1])){
            texto = texto.replaceAll(arrayLetter[i][1], arrayLetter[i][0])
        }
    }
    document.getElementById("img-muneco").style.display = "none";
    document.getElementById("texto-muneco-bold").style.display = "none";
    document.getElementById("p-request").innerText = texto;
}
