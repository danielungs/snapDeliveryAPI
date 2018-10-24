
var exports = module.exports = {};

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var Cabstand = function(code, coordinate, name,	address, description) {
    return {
        code: code,
        coordinate: coordinate,
		name: name,
		address: address,
		description: description
    }
}

var cabstand_list = [
        new Cabstand("SM01", new Coordinate(-34.5449188,-58.711328), "Plaza Central", "Av. Pres. Juan Domingo Peron 1538", "Plaza San Miguel"),
        new Cabstand("SM02", new Coordinate(-34.5477245,-58.7046179), "Plaza Muniz", "San Jose 1150", "Plaza de las Carretas"),
		new Cabstand("LM01", new Coordinate(-34.5324173,-58.702585), "Parada Lemos", "Av. Balbin 85", "Estacion Lemos"),
		new Cabstand("HS01", new Coordinate(-34.5206776,-58.7183291), "Parada Polo", "Av. Pres. Arturo Umberto Illia 5650",  "Hospital Polo Sanitario")
		];

/******************************************************************************
 * API
 */
exports.list = function() {
    return cabstand_list;
}

exports.get = function(code) {
	return cabstand_list.filter(cabstand => cabstand.code == code)[0];
}