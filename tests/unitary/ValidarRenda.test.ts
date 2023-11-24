import { validarRenda } from "../../src/service/ValidarRenda";

describe ('Validação da Renda', () => {
    test('Verificar a função de validação de Renda, que recebe um número com valor da renda mensal e uma string com o tipo de empréstimo.', () => {
        expect ( validarRenda(3000, 'Pessoal')).toEqual(true)
    });
});

describe ('Validação da Renda', ()=>{
    test('Verifica a função de validação de Renda, que recebe um número com valor da renda mensal e uma string com o tipo de empréstimo.', () => {
        expect ( validarRenda(3001, 'Automóvel')).toEqual(true)
    });
});

describe ('Validação da Renda', () => {
    test('Verifica a função de validação de Renda, que recebe um número com valor da renda mensal e uma string com o tipo de empréstimo.', () => {
        expect (validarRenda(3000, 'Estudantil')).toEqual(true)
    });
});

describe ('Validação da Renda', () => {
    test('Verificar a função de validação de Renda, que recebe um número com valor da renda mensal e uma string com o tipo de empréstimo.', () => {
        expect ( validarRenda(2500, 'Pessoal')).toEqual(false)
    });
});

describe ('Validação da Renda', ()=>{
    test('Verifica a função de validação de Renda, que recebe um número com valor da renda mensal e uma string com o tipo de empréstimo.', () => {
        expect ( validarRenda(3000, 'Automóvel')).toEqual(false)
    });
});

describe ('Validação da Renda', () => {
    test('Verifica a função de validação de Renda, que recebe um número com valor da renda mensal e uma string com o tipo de empréstimo.', () => {
        expect (validarRenda(1500, 'Estudantil')).toEqual(false)
    });
});

