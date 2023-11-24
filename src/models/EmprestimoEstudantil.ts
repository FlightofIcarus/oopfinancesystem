export class EmprestimoEstudantil{
    nomedoSolicitante: string;
    idadedoSolicitante: number;
    valorRequerido: number;
    numerodeParcelas: number;
    valorDaParcela: number;
    rendaMensal: number;
    possuiCNH: boolean;
    estaMatriculadonoES: boolean;
    tipo: string;

    constructor(nomedoSolicitante: string,
        idadedoSolicitante: number,
        valorRequerido: number,
        numerodeParcelas: number,
        valorDaParcela: number,
        rendaMensal: number,
        possuiCNH: boolean,
        estaMatriculadonoES: boolean) {
            this.nomedoSolicitante = nomedoSolicitante,
            this.idadedoSolicitante = idadedoSolicitante,
            this.valorRequerido = valorRequerido,
            this.numerodeParcelas = numerodeParcelas,
            this.valorDaParcela = valorDaParcela,
            this.rendaMensal = rendaMensal,
            this.possuiCNH = possuiCNH,
            this.estaMatriculadonoES = estaMatriculadonoES,
            this.tipo = 'Estudantil'
        }
};