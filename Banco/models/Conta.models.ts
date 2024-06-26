import { TipoConta } from "Banco/enum/TipoConta.enum";
import { Cliente } from "./Cliente.models";

export class Conta {
    cliente: Cliente
    tipo: TipoConta;
    saldo: number;
    status: boolean;

    constructor(cliente: Cliente, tipo: TipoConta, saldo: number, status: boolean) {
        this.cliente = cliente;
        this.tipo = tipo;
        this.saldo = 0;
        this.status = false;
    }

    abrirConta(): void {
        console.log(`Sua conta foi aberta com sucesso!.`);
    }

    fecharConta(): void {
        if (this.saldo > 0) {
            console.log(`Sua conta não está zerada, por isso não pode fechar esta conta`);
        } else if (this.saldo < 0) {
            console.log(`Sua conta está negativada. Não pode encerrar a conta com débito em aberto`);
        } else {
            this.status = false
            console.log(`${this.cliente.nomeCompleto}, sua conta foi fechada com sucesso`);
        }
    }
    verificarSaldo(): void {
        console.log(`O saldo atual da sua conta é R$ ${this.saldo}`)
    }

    depositar(valor:number){
        if (this.status === true){
            this.saldo = this.saldo + valor
            console.log(`Seu saldo atual é de ${this.saldo}.`);
        } else{
            console.log(`Operação de depósito inválida. Conta inexistente`);
        }
    }

    sacar(valor:number){
        if(this.status === true){
            if (this.saldo > valor){
                this.saldo = this.saldo - valor
            }else{
                console.log(`Saldo insuficiente`);
            }
        }else{
            console.log(`Operação de saque inválida. Conta inexistete `);
        }
    }

    transferir(valorDaTransf:number){
        let valorFinal = this.saldo - valorDaTransf
        if (this.saldo > valorDaTransf){
            console.log(`Você não tem saldo suficiente para esta transação`); 
        }else {
            console.log(`Transferencia realizada com sucesso, seu novo saldo é de ${valorFinal}.`);  
        }
    }

}