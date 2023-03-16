import { mensagensDeErro } from "../mensagensDeErro/mensagens.js";

export function validaCPF(input, tipoDeInput) {
    const cpfFormatado = input.value.replace(/\D/g, '');
    let mensagem = '';
    
    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)){
        mensagem = mensagensDeErro(input, tipoDeInput);
    }
    input.setCustomValidity(mensagem);
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf) {
            cpfValido = false
        }
    })

    return cpfValido
}

function checaEstruturaCPF(cpf) {
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
    if(multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }

    if(digitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

function confirmaDigito(soma) {
    return 11 - (soma % 11)
}

//Código da internet que peguei e não funcionou
//Link: https://www.geradorcpf.com/javascript-validar-cpf.htm
/* function validarCPF(cpf) {
    // Elimina CPFs invalidos conhecidos	
	if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(cpf) !== -1){
		
        return false;
    }

	// Valida 1o digito	
	let soma,resto,i = 0;

    for (i=1; i<=9; i++){
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)){
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))){
        return false;
    }

    soma = 0

    for (i = 1; i <= 10; i++){
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)){
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(10, 11))){
        return false;
    }

    return true;
} */
