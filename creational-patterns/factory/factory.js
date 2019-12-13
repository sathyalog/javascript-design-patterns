class Car {
    constructor(doors,engine,color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class carFactory {
    createCar(type) {
        switch(type) {
            case 'honda':
                return new Car(4, 'V5', 'red');
            case 'renault':
                return new Car(4, 'V8', 'blue');
        }
    }
}

const factory = new carFactory();
const jazz = factory.createCar('honda');
console.log('Honda Jazz', jazz);
const kwid = factory.createCar('renault');
console.log('Renault Kwid', kwid);
const triber = factory.createCar('renault');
console.log('Renault Triber', triber);