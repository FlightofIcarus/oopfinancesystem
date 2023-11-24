import { validarIdade } from "../../src/service/validarIdade";

describe ('Validação da Idade', () => {
    test('Verificar a função de validação deidadeH, que recebe umnúmero e uma string com o tipo de empréstimose', () => {
        expect ( validarIdade(17,'Estudantil')).toEqual(false)
    });
});

describe ('Validação da Idade', ()=>{
    test("Verifica a função de validação de idade, que recebe um número e uma string com o tipo de empréstimo", () => {
        expect ( validarIdade(25,'Estudantil')).toEqual(true)
    });
});

describe ('Validação da Idade', () => {
    test("Verifica a função de validação de idade, que recebe um número e uma string com o tipo de empréstimo", () => {
        expect (validarIdade(31,'Estudantil')).toEqual(false)
    });
});

describe ('Validação da Idade', () => {
    test("Verifica a função de validação de idade, que recebe um número e uma string com o tipo de empréstimo", () => {
        expect (validarIdade(25,'Automóvel')).toEqual(true)
    });
});

describe ('Validação da Idade', () => {
    test("Verifica a função de validação de idade, que recebe um número e uma string com o tipo de empréstimo", () => {
        expect (validarIdade(25,'Pessoal')).toEqual(true)
    });
});