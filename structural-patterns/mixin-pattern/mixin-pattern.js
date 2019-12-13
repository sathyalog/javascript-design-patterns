class Car {
    constructor(doors,engine,color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'hatchback':
                return new Car(4, 'V5', 'red');
            case 'sedan':
                return new Car(4, 'V8', 'blue');
        }
    }
}

let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} is doing Great`);
    }
}

const carFactory = new CarFactory();

const autoManufacturer = (type,model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'bike':
            return bikeFactory.createBike(model);
        case 'tractor':
            return tractorFactory.createTractor(model);
    }
}

Object.assign(Car.prototype, carMixin);

const cx5 = autoManufacturer('car','sedan');

cx5.revEngine();