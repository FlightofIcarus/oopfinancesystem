import { EmprestimoPessoal } from "../../src/models/EmprestimoPessoal";

describe ('Auto class test', () => {
    test('Create a new object from auto class', () => {
        expect( new EmprestimoPessoal('João', 18, 3000, 24, 166.666, 3000, true, false)).toEqual({
            nomedoSolicitante: 'João',
            idadedoSolicitante: 18,
            valorRequerido: 3000,
            numerodeParcelas: 24,
            valorDaParcela: 166.666,
            rendaMensal: 3000,
            possuiCNH: true,
            estaMatriculadonoES: false,
            tipo: 'Pessoal'
          });
    });
});

describe ('Auto class test', () => {
    test('Create a new object from auto class', () => {
        expect( new EmprestimoPessoal('João', 18, 3000, 24, 166.666, 3000, true, false)).not.toEqual({
            nomedoSolicitante: 'João',
            idadedoSolicitante: 18,
            valorRequerido: 3000,
            numerodeParcelas: 24,
            valorDaParcela: 166.666,
            rendaMensal: 3000,
            possuiCNH: true,
            estaMatriculadonoES: false,
            tipo: 'Automóvel'
          });
    });
});

describe ('Auto class test', () => {
    test('Create a new object from auto class', () => {
        expect( new EmprestimoPessoal('João', 18, 3000, 24, 166.666, 3000, true, false)).not.toEqual({
            nomedoSolicitante: 'João',
            idadedoSolicitante: 18,
            valorRequerido: 3000,
            numerodeParcelas: 24,
            valorDaParcela: 166.666,
            rendaMensal: 3000,
            possuiCNH: true,
            estaMatriculadonoES: false,
            tipo: 'Estudantil'
          });
    });
});