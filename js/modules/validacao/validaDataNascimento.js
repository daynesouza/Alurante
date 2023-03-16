import { mensagensDeErro } from "../mensagensDeErro/mensagens.js";

export function validaDataNascimento (input, tipoDeInput){
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if(!maiorQue18(dataRecebida)){
        mensagem = mensagensDeErro(input, tipoDeInput);
    }
    
    
    input.setCustomValidity(mensagem);
}

function maiorQue18(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataMais18 <= dataAtual;
}