class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); // bind(document) é utilizado, pois o querySelector só funciona com o document.

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){

        event.preventDefault();

        // Código para ajustar data versão 4 - Funcionando, utilizando arrow function sem o return
        // e sem o bloco {}, isto porque a arrow function só possui uma instrução.
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        // // Código para ajustar data versão 3 - Funcionando, utilizando arrow function
        // let data = new Date(...
        //     this._inputData.value
        //     .split('-')
        //     .map((item, indice) => {
        //         return item - indice % 2;
        //     }));

        // // Código para ajustar data versão 2 - Funcionando, utilizando módlulo no lugar do if
        // let data = new Date(...
        //     this._inputData.value
        //     .split('-')
        //     .map(function(item, indice){
        //         return item - indice % 2;
        //     }));

        // Código para ajustar data versão 1 - Funcionando, utilizando if
        // Código funciona, diminui um do item mês e retorna a data correta. Porém vamos utlizar o item acima
        // a fim de evitar o if, utilizaremos o módulo.
        // let data = new Date(...
        //     this._inputData.value
        //     .split('-')
        //     .map(function(item, indice){
        //         if(indice == 1){
        //             return item - 1;
        //         }
        //         return item;
        //     })
        //     );
        // console.log(data);


        // let data = new Date(this._inputData.value.replace(/-/g, ','));

        // console.log(data);        

        // console.log(this._inputData.value.split('-')); 
        
        // console.log(this._inputData.value.replace(/-/g, ','));
        
        // console.log(typeof(this._inputData.value));

        // console.log('a Data é :' + this._inputData.value);
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );

        console.log('A negociação é :' + negociacao);

        console.log(Date());
        console.log('Data: ' + this._inputData.value);
        console.log('Quantidade: ' + this._inputQuantidade.value);
        console.log('Valor: ' + this._inputValor.value);
        
    }
}

// Feita uma reflexão de como a data é, tivemos que transformá-la em um array para poder utilizá-la de
// forma correta.

