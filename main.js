import {adicionar, itens } from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);



atualiza();

function envia(evento) {
    evento.preventDefault();
    console.log('Formulário Enviado!');
    const n = form.valor.value;
    adicionar(n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    for(let i = 0; i < itens().length; i++) {
        const li = document.createElement('li');
        li.textContent = itens()[i];
        ol.appendChild(li);
    }
}