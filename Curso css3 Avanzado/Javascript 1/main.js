//Alertas
alert("Hola soy David Abril");

//Variables
let nombre = "David", apellido = "Abril";

const altura = 175;


console.log(nombre);

console.log(altura);

//Concatenacion
let concatenacion = nombre + " " + "Abril";
console.log(concatenacion);

let datos = document.querySelector("#datos");
datos.innerHTML = `<h1>Soy la caja desde JS</h1>
<h2>Me llamo ${nombre} ${apellido}<h2>
<h1>Soy la caja desde JS usando Concatenacion</h1>
<h2>Me llamo ${concatenacion}<h2>
<h3>Mido ${altura} cm`;

if(altura >= 175){
    datos.innerHTML += "Eres una persona alta"
}else{
    datos.innerHTML += "Eres una persona bajita"
}


const nombres = ["David" , "Ignacio", "ElMejor"];

let divNombres = document.querySelector("#nombres")
divNombres.innerHTML += `Nombres: <ul>`
nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>" +nombre+ "</li>"
});
divNombres.innerHTML += `</ul>`

// for(let i=0; i<3; i++){
//     divNombres.innerHTML += nombres[i] + ` `
// }

//funciones
const MiPrimerFuncion = (nombre, apellido, altura) => {
    let misDatos = `<h2>Me llamo ${nombre} ${apellido}<h2>
    <h3>Mido ${altura} cm`;
    return misDatos;
}

datos.innerHTML += MiPrimerFuncion("Teo", "Abril", 10);
datos.innerHTML += MiPrimerFuncion("Tomas", "Abril", 180000);