class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); // bind(document) é utilizado, pois o querySelector só funciona com o document.

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){

        event.preventDefault();

        let helper = new DateHelper();
              
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor
        );

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));
        
        
    }
}

// Feita uma reflexão de como a data é, tivemos que transformá-la em um array para poder utilizá-la de
// forma correta.

