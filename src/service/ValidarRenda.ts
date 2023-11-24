export function validarRenda(renda:number, tipodeEmprestimo: string): boolean {
    if(tipodeEmprestimo === 'Estudantil' && renda > 1500) {
        return true;
    } else if(tipodeEmprestimo === 'Pessoal' && renda > 2500){
        return true;
    } else if(tipodeEmprestimo === 'Automóvel' && renda > 3000){
        return true;
    }else {
        return false;
    };
    
};


