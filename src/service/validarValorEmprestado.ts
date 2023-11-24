export function validarValorEmprestado(valorEmprestimo:number, nParcelas: number, valorParcela: number): boolean {
    let valorValidado = (valorParcela = Number((valorEmprestimo / nParcelas).toFixed(2))) ? true : false;

    return valorValidado;
    
}

