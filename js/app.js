import { validacao } from "./modules/validacao/validacao.js";

const inputs = document.querySelectorAll('input');

inputs.forEach( input => {
    input.addEventListener('blur', (evento) => {
        validacao(evento.target)
    })
});