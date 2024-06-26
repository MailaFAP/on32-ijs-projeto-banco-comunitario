export class Cliente {
    id: number;
    nomeCompleto: string;
    endereco: string;
    telefone: number;
    renda: number;

    constructor(id:number,nomeCompleto:string,endereco:string,telefone:number,renda:number){
        this.id = id,
        this.nomeCompleto = nomeCompleto,
        this.endereco = endereco,
        this.telefone = telefone,
        this.renda = renda
    }
        
}