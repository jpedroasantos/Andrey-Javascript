class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        this._listaConsulta = new ListaConsulta();
        this._consultaView = new ConsultaView($('#consultasView')); 
        this._consultaView.update(this._listaConsulta);
        this._mensagem = new Mensagem(); 
        this._mensagemView = new MensagemView($('#mensagemView'))
    } 

    adiciona(evento) {
        evento.preventDefault(); 
        let consulta = this._criaConsulta(); 
        this._listaConsulta.adiciona(consulta); 
        this._mensagem.texto = "Consulta adicionada com sucesso";
        this._mensagemView.update(this._mensagem);
        this._consultaView.update(this._listaConsulta);
        this._limpaFormulario();
    } 

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value, 
            DateHelper.textoParaData(this._inputData.value), 
            this._inputPeso.value, 
            this._inputAltura.value
        );
    } 

    _limpaFormulario() {
        this._inputNome = "";
        this._inputData = "";
        this._inputPeso = "";
        this._inputAltura = ""; 

        this._inputNome.focus(); 
    }
}