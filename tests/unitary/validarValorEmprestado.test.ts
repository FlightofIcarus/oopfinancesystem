import { validarValorEmprestado } from "../../src/service/validarValorEmprestado";

describe ('Validação da CNH', () => {
    test('Verificar a função de validação de CNH, que recebe um boolean false', () => {
        expect ( validarValorEmprestado(4000, 24, 166.66)).toBeTruthy()
    });
});

describe ('Validação da CNH', ()=>{
    test("Verifica a função de validação de CNH, que recebe um boolean true", () => {
        expect ( validarValorEmprestado(2000, 12, 166.66)).toBeTruthy()
    });
});


describe ('Validação da CNH', () => {
    test("Verifica a função de validação de CNH, que recebe um boolean true", () => {
        expect (validarValorEmprestado(2000, 10, 200)).not.toBeFalsy()
    });
});