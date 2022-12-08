//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const buttonShowme = document.querySelector(".showme");
console.log(buttonShowme);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const tittlePillado = document.querySelector("#pillado");
console.log(tittlePillado);

//1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const allPokemon = document.querySelectorAll(".pokemon");
console.log(allPokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const attributeTestMe = document.querySelectorAll("[data-function='testMe']");
console.log(attributeTestMe);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log(attributeTestMe[2]);
