import { mensagensDeErro } from "../mensagensDeErro/mensagens.js";

export function validacaoCEP (input, tipoDeInput){
    const cep = input.value.replace(/\D/g, '');
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };

    if(!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro) {
                    input.setCustomValidity(mensagensDeErro(input, tipoDeInput))
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCEP(data)
                return
            }
        )
    }
}

function preencheCamposComCEP(data) {
    const logradouro = document.querySelector('[data-type="logradouro"]')
    const cidade = document.querySelector('[data-type="cidade"]')
    const estado = document.querySelector('[data-type="estado"]')

    logradouro.value = data.logradouro
    cidade.value = data.localidade
    estado.value = data.uf
}
