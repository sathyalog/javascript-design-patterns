//Car is blueprint here. class is a prototype
class Car {
    constructor(doors,engine,color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}
//create multiple objects using blueprint
const renaultKwid = new Car(4, 'V6', 'grey');

console.log(renaultKwid);

const hyundaiSantro = new Car(4, 'T5', 'red');

console.log(hyundaiSantro);