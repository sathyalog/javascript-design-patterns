let instance = null;

class Car {
    constructor(doors,engine,color) {
        if(!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}

const instance1 = new Car(4, 'v5', 'red');

const instance2 = new Car(4, 'v8', 'blue');

console.log(instance1);
console.log(instance2);