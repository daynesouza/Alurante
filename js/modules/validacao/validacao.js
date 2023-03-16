import { mensagensDeErro } from "../mensagensDeErro/mensagens.js";
import { validaDataNascimento } from "./validaDataNascimento.js";
import { validaCPF } from "./validaCPF.js";
import { validacaoCEP } from "./validaCEP.js";

export function validacao(input) {
    const tipoDeInput = input.dataset.type;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        input.classList.remove('main__cadastro__form__input--erro');
        input.parentElement.querySelector(`[data-mensagemErro="${tipoDeInput}"]`).innerHTML = "";

    } else {
        input.classList.add('main__cadastro__form__input--erro');
        input.parentElement.querySelector(`[data-mensagemErro="${tipoDeInput}"]`).innerHTML = mensagensDeErro(input, tipoDeInput);
    }
};

const validadores = {
    dataNascimento:input => validaDataNascimento(input, "dataNascimento"),
    cpf:input => validaCPF(input, "cpf"),
    cep:input => validacaoCEP(input, "cep") //valida e preenche os campos com a informação do CEP
};
