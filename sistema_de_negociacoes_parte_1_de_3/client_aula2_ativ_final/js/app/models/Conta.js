class Conta {

    constructor(titular, conta){

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;

    }

    deposita(valor){

        console.log('Valor depositado: ' + valor)   ;
        this._saldo+=valor;
    }

    get saldo(){
        return this._saldo;
    }

    get titular(){
        return this._titular;
    }

    get conta(){
        return this._saldo;
    }

}

var conta = new Conta('Jorge Kim', '22202-7');
conta.deposita(12000);
console.log(conta.titular);
console.log(conta.conta);
console.log(conta.saldo);
conta.deposita(18000);
console.log(conta.saldo);



