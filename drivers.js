
var exports = module.exports = {};

var Driver = function(id, name, surname, score, car) {
    return {
        id: id,
        name: name,
        surname: surname,
		score: score,
        car: car
    }
}

var Car = function(id, description, color, plateNumber, year) {
    return {
        id: id,
		description: description,
		color: color,		
		plateNumber: plateNumber, 
		year: year
    }
}

/******************************************************************************
 * Cars
 */
 var cars = [
    new Car(0, "Volkswagen Vento", "red", "GHI123", 2017),
    new Car(1, "Dodge Charger", "black", "2JRI424", 1970),
	new Car(2, "Batmobile", "black", "BAT-1", 1966),
	new Car(3, "DeLorean DMC-12", "gray", "OUTATIME", 1985),	
	new Car(4, "Renault fuego", "red", "GOT101", 1988),
	new Car(5, "Renault 12", "green", "ABC456", 1980)
];

/******************************************************************************
 * Drivers
 */
var drivers = [
	new Driver(600, "Esteban", "Tuero", 3, cars[0]),
	new Driver(107, "Dominic", "Toretto", 4, cars[1]),
	new Driver(121, "Alfred", "Pennyworth", 5, cars[2]),
	new Driver(105, "Emmett", "Brown", 5, cars[3]),
	new Driver(201, "Jon", "Snow", 4, cars[4]),
	new Driver(222, "Elsa", "Popepe", 3, cars[5])
];

/******************************************************************************
 * API
 */
exports.list = function() {
    return drivers;
}

exports.get = function(id) {
    return drivers.filter(driver => driver.id == id)[0];
}