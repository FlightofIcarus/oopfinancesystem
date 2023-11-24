export function validarIdade(idade: number, tipodeEmprestimo: string): boolean {
    if(idade < 18){
        return false;
    } else {
        if(idade > 30 && tipodeEmprestimo === 'Estudantil'){
        return false;
    }else{ return true; }
} 
}


