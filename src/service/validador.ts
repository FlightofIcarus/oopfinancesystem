import { validarRenda } from "./ValidarRenda";
import { validarCNH } from "./validarCNH";
import { validarIdade } from "./validarIdade";
import { validarMatriculaES } from "./validarMatriculaES";
import { validarValorEmprestado } from "./validarValorEmprestado";
import { Emprestimo } from "../types/proposta";


export default class Validador {
    protected validarCNH = validarCNH;
    protected validarIdade = validarIdade;
    protected validarMatriculaES = validarMatriculaES;
    protected validarValorEmprestado = validarValorEmprestado;
    protected validarRenda = validarRenda;
    /**
     * validarEmprestimo
     */
    public validarEmprestimo(proposta: Emprestimo): boolean {
        let idade = this.validarIdade(proposta.idadedoSolicitante , proposta.tipo);
        let renda = this.validarRenda(proposta.rendaMensal, proposta.tipo);
        let cnh = (proposta.tipo === 'Automóvel') ? this.validarCNH(proposta.possuiCNH) : true;
        let es = (proposta.tipo === 'Estudantil') ? this.validarMatriculaES(proposta.estaMatriculadonoES) : true;
        let valorValido = validarValorEmprestado(proposta.valorRequerido, proposta.numeroDeParcelas, proposta.valorDaParcela);
        let response = (idade && renda && cnh && es && valorValido) ? true : false;
        return response
    }

}


