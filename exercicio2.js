class Animal{
    constructor(nome, especie){
        this.nome = nome
        this. especie = especie
    }
}
class Cachorro extends Animal{
    constructor(nome, especie){
        super(nome, especie)
    }
    latir(){
        console.log("Au Au AU AUUUU AU AU AU!!!");
    }
}
class Gato extends Animal{
    constructor(nome, especie){
        super(nome, especie)
    }
    miar(){
        console.log("MIAAAAAAAU Miaaaaaaaaaaaaau miau miauuuuuuuuuuuu");
    }
}
var gato = new Gato("Miaú", "Gato")
var cachorro = new Cachorro("Totó", "Cachorro")
gato.miar()
cachorro.latir()