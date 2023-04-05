// Описать тип объекта "автомобиль", инкапсулирующего свойства автомобиля (марка, модель, объём двигателя, время разгона до 100 км/ч, расход топлива на 100 км пути),
// функции установки этих свойств и функцию вывода в окно браузера.
// Описать и заполнить массив таких объектов, вывести информацию о них.
// Реализация должна быть объектно-ориентированной с использованием возможностей ECMAScript 6+.

class Car {
    constructor(mark, model, V, T, C) {
        this.mark = mark;
        this.model = model;
        this.V = V;
        this.T = T;
        this.C = C;
    }

    setMark(mark) {this.mark = mark;}
    setModel(model) {this.model = model;}
    setV(V) {this.V = V;}
    setT(T) {this.T = T;}
    setC(C) {this.C = C;}

    printInfo() {
        alert(`Машина марки ${this.mark}, модели ${this.model}, имеет объем двигателя ${this.V} литров, время разгона до 100 км/ч = ${this.T}, расход топлива на 100км = ${this.C}`)
    }
}

const cars = [];
for (let i = 0; i < 5; i++) {
    cars[i] = new Car(`mark ${i}`, `model ${i}`, Math.floor(Math.random() * 8), `${Math.floor(Math.random() * 20)} c`, `${Math.floor(Math.random() * 20)} л`);
}

cars.forEach((item, i) => {
    item.printInfo();
});
