function Cars() {
    this.name = "Car";
    this.wheels = 4;
}

function Tractor() {
    this.name = "Tractor";
    this.wheels = 4;
}

function Bike() {
    this.name = "Bike";
    this.wheels = 2;
}
const vehicleFactory = {
    createVehicle: function(type) {
        switch (type.toLowerCase()) {
            case "car":
                return new Cars();
            case "tractor":
                return new Tractor();
            case "bike":
                return new Bike();
            default:
                return null;
        }
    }
};
var MahindraTractor = vehicleFactory.createVehicle("tractor");
console.log('MahindraTractor', MahindraTractor); 