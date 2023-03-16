export function mensagensDeErro(input, tipoDeInput){
    const tiposDeErro = [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'customError'
    ];
    
    const mensagensDeError = {
        nome: {
            valueMissing: 'O campo de nome não pode estar vazio.'
        },
        email: {
            valueMissing: 'O campo de email não pode estar vazio.',
            typeMismatch: 'O email digitado não é válido.'
        },
        senha: {
            valueMissing: 'O campo de senha não pode estar vazio.',
            patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
        },
        dataNascimento: {
            customError: 'Você deve ser maior que 18 anos para se cadastrar.',
            valueMissing: 'O campo de data de nascimento não pode estar vazio.'
        },
        cpf: {
            valueMissing: 'O campo de CPF não pode estar vazio.',  
            customError: 'O CPF digitado não é válido.'
        },
        cep: {
            valueMissing: 'O campo de CEP não pode estar vazio.',
            patternMismatch: 'O CEP digitado não é válido.',
            customError: 'Não foi possível buscar o CEP.'
        },
        logradouro: {
            valueMissing: 'O campo de logradouro não pode estar vazio.'
        },
        cidade: {
            valueMissing: 'O campo de cidade não pode estar vazio.'
        },
        estado: {
            valueMissing: 'O campo de estado não pode estar vazio.'
        },
    };

    let mensagem, erro = '';

    for (erro of tiposDeErro){
        if(input.validity[erro]){
            mensagem = mensagensDeError[tipoDeInput][erro];           
            break;
        }
    }

    /* tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeError[tipoDeInput][erro]
        }
    }); */

    return mensagem;
}