class Consulta {
    constructor(nome, data, peso, altura) {
        this._nome = nome; 
        this._data = new Date(data);
        this._peso = peso; 
        this._altura = altura; 
        Object.freeze = this
    } 

    get nome() {
        return this._nome;
    } 

    get data() {
        return this._data;
    } 

    get peso() {
        return this._peso;
    } 

    get altura() {
        return this._altura;
    }

    getImc() {
        return this._peso / (this._altura * this._altura);
    }
}