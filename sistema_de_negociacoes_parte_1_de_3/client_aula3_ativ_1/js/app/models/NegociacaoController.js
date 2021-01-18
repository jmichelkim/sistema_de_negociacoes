class NegociacaoController {

    adiciona(event){

        event.preventDefault();

        let $ = document.querySelector.bind(document); // bind(document) é utilizado, pois o querySelector só funciona com o document.
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log('Data: ' + inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
        
    }
}