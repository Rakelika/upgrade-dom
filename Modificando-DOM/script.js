'use strict';

//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement('div');
document.body.append(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2 = document.createElement('div');
document.body.append(newDiv2);
newDiv2.innerHTML='<p></p>';

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const newDiv3 = document.createElement('div');
document.body.append(newDiv3);
for (let i = 0; i < 6; i++) {
	const parrafos = document.createElement('p');
	newDiv3.append(parrafos);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const newParrafo = document.createElement('p');
document.body.append(newParrafo);
newParrafo.innerText='Soy dinámico';

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const Wubba = document.querySelector('h2.fn-insert-here');
Wubba.innerText = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. 
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulApps = document.createElement('ul');
document.body.append(ulApps);
for (let index = 0; index < apps.length; index++) {
	const liApps = document.createElement('li');
    ulApps.append(liApps);
	liApps.innerText = apps[index];
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminar = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < eliminar.length; i++) {
	eliminar[i].remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.
const voyMedio = document.createElement('p')
document.body.insertBefore(voyMedio, document.querySelectorAll('div.fn-insert-here')[1]);
voyMedio.innerText='Voy en medio!';

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const voyDentro = document.querySelectorAll('div.fn-insert-here');
for (let i = 0; i < voyDentro.length; i++) {
	voyDentro[i].innerHTML='<p>Voy dentro!</p>';
}

