import { validarMatriculaES } from "../../src/service/validarMatriculaES";

describe ('Validação da matrícula em Ensino Superior', () => {
    test('Verificar a função de validação de matrícula em Ensino Superior, que recebe um boolean false', () => {
        expect ( validarMatriculaES(false)).toEqual(false)
    });
});

describe ('Validação da matrícula em Ensino Superior', ()=>{
    test("Verifica a função de validação de matrícula em Ensino Superior, que recebe um boolean true", () => {
        expect ( validarMatriculaES(true)).toEqual(true)
    });
});

describe ('Validação da matrícula em Ensino Superior', () => {
    test("Verifica a função de validação de matrícula em Ensino Superior, que recebe um boolean true", () => {
        expect (validarMatriculaES(false)).not.toEqual(true)
    });
});

describe ('Validação da matrícula em Ensino Superior', () => {
    test("Verifica a função de validação de matrícula em Ensino Superior, que recebe um boolean true", () => {
        expect (validarMatriculaES(true)).not.toEqual(false)
    });
});