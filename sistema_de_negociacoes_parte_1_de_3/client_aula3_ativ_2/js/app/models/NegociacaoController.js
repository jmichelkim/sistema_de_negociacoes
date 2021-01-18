class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); // bind(document) é utilizado, pois o querySelector só funciona com o document.

        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');



    }

    adiciona(event){

        event.preventDefault();

        console.log(Date());
        console.log('Data: ' + this.inputData.value);
        console.log('Quantidade: ' + this.inputQuantidade.value);
        console.log('Valor: ' + this.inputValor.value);
        
    }
}