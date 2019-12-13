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

class Bike {
    constructor(engine, color, model) {
        this.engine = engine;
        this.color = color;
        this.model = model;
    }
}

class BikeFactory {
    createBike(model) {
        switch(model){
            case 'duke':
                return new Bike('Duke Engine', 'red', 'Duke 250');
            case 'bullet':
                return new Bike('Royal Enfield', 'Black', 'Bullet 350');
            case 'scooty':
                return new Bike('Scooty Engine', 'Yellow', 'SC 100');
        }
    }
}

class Tractor {
    constructor(engine, model) {
        this.engine = engine;
        this.model = model;
    }
}

class TractorFactory {
    createTractor(model) {
        switch(model) {
            case 'farming':
                return new Tractor('TYU 2200', 'Farming')
            case 'heavyload':
                return new Tractor('UOP 3500', 'HeaveLoad')
        }
    }
}

const carFactory = new CarFactory();
const bikeFactory = new BikeFactory();
const tractorFactory = new TractorFactory();


// creating abstract factory
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

const dio = autoManufacturer('bike','scooty');
const kwid = autoManufacturer('car', 'hatchback');
const mahindra = autoManufacturer('tractor','heavyload');

console.log(dio);
console.log(kwid);
console.log(mahindra);
