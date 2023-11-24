import { validarCNH } from "../../src/service/validarCNH";

describe ('Validação da CNH', () => {
    test('Verificar a função de validação de CNH, que recebe um boolean false', () => {
        expect ( validarCNH(false)).toEqual(false)
    });
});

describe ('Validação da CNH', ()=>{
    test('Verifica a função de validação de CNH, que recebe um boolean true', () => {
        expect ( validarCNH(true)).toEqual(true)
    });
});

describe ('Validação da CNH', () => {
    test('Verifica a função de validação de CNH, que recebe um boolean false', () => {
        expect ( validarCNH(false)).not.toEqual(true)
    });
});

describe ('Validação da CNH', () => {
    test('Verifica a função de validação de CNH, que recebe um boolean true', () => {
        expect ( validarCNH(true)).not.toEqual(false)
    });
});