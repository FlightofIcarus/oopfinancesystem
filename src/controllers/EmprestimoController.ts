import Validador from "../service/validador";
import { Emprestimo } from "../types/proposta";
import { EmprestimoEstudantil } from "../models/EmprestimoEstudantil";


export class SolicitacaoEmprestimo{
    static add(proposta: Emprestimo ) {
        let validador = new Validador;
        (validador.validarEmprestimo(proposta)) ? console.log(`Empréstimo do tipo ${proposta.tipo} para ${proposta.nomedoSolicitante} foi [APROVADO]`): console.log(`Empréstimo do tipo ${proposta.tipo} para ${proposta.nomedoSolicitante} foi [REPROVADO]`);

    }
}
