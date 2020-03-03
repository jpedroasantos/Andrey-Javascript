class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
    } 

    adiciona(evento) {
        evento.preventDefault(); 
        let consulta = new Consulta (
            this._inputNome.value, //criar datahelper 
            new Date(...this._inputData.value
                .split('-')
                .map((item, indice) => item - (indice % 2))
            ), 
            this._inputPeso.value, 
            this._inputAltura.value
        );
        console.log(this._inputData.value);
    }
}