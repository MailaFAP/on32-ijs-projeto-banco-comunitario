import { Cliente } from "./Cliente.models";
import { Conta } from "./Conta.models";

export class ContaCorrente extends Conta{
    chequeEspecial: number;

    constructor( cliente: Cliente,saldo:number, status:boolean, chequeEspecial:number){
        super(cliente,TipoConta.CORRENTE,saldo,status);
        this.chequeEspecial = 100.00;
    }
    abrirConta(): void {
        if (this.cliente.renda >= 500) {
            this.status = true
            console.log(`Olá ${this.cliente.nomeCompleto}, sua conta corrente foi aberta com sucesso!`);
        } else {
            console.log(`Para abrir uma conta corrente, sua renda precisa ser maior que R$500,00.`);
        }
    }
    sacar(valor:number):void{
        if(this.status === true){
            if (valor > this.saldo + this.chequeEspecial){
                console.log(`Saldo insuficiente`); 
            }else{
                this.saldo = this.saldo - valor
                console.log(`Saque realizado com sucesso!`); 
            }
        }else{
            console.log(`Operação de saque inválida. Conta inexistete`);
        }
    }
}