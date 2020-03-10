class MensagemView extends View{
    constructor(elemento) {
        super(elemento);
    } 

    _template(modelo) {
        return `<p class="alert alert-info">${modelo.texto}<p>`
    }
}