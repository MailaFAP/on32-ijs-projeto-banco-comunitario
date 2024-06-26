import { Cliente } from "./models/Cliente.models"
import { ContaCorrente } from "./models/ContaCorrente.models";

// Cliente
console.log(`Cliente`)
const clienteConta = new Cliente(1,`Maila Ferreira`, `Rua: Cayowaa,56`, 36256524, 700);

//Conta Corrente
console.log(`Conta`)
const contaCorrCliente = new ContaCorrente(clienteConta, 500, true, 100);
console.log(contaCorrCliente.depositar(600));
console.log(contaCorrCliente.sacar(800));
console.log(contaCorrCliente.transferir(200));
console.log(contaCorrCliente.sacar(400))

//Conta Poupança
console.log(`Conta`)
const contaPoupCliente = new ContaCorrente(clienteConta, 0, true, 100);
console.log(contaPoupCliente.depositar(600));
console.log(contaPoupCliente.transferir(200));
console.log(contaPoupCliente.sacar(400))