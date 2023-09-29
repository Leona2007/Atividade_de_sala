class figuraGeometrica{
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }
}
class retangulo extends figuraGeometrica{
    constructor(base, altura){
        super(base, altura)
    }
    calcularArea(){
        var area = this.base * this.altura
        console.log(area)
    }
}
class circulo extends figuraGeometrica{
    constructor(base, altura, raio){
        super(base, altura)
        this.raio = raio
    }
    calcularArea(){
        var areac = Math.PI * this.raio ** 2
        console.log(areac)
    }
}
var obj1 = new retangulo(10, 20)
var obj2 = new circulo(0, 0, 5)
obj1.calcularArea()
obj2.calcularArea()
