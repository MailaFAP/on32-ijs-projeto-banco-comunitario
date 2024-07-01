import { TipoConta } from "Banco/enum/TipoConta.enum";
import { Cliente } from "./Cliente.models";
import { Conta } from "./Conta.models";

export class ContaPoupanca extends Conta{

    constructor(cliente: Cliente, saldo:number, status:boolean, limite:number){
        super(cliente,TipoConta.POUPANCA,saldo,status)
    }
 
}