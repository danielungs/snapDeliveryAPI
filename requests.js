
var exports = module.exports = {};

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var DriverPosition = function(driver_id, coordinate) {
	return {
        driver_id: driver_id,
        position: coordinate
	}
}


var requests = [
    {
        id: 42,
        sender: new Coordinate(-34.5213293,-58.7008651),
		receiver: new Coordinate(-34.5339425,-58.7055392),//-34.535776, -58.707715
		availableDrivers: [
			new DriverPosition(600, new Coordinate(-34.5315387,-58.7031964)),
			new DriverPosition(107, new Coordinate(-34.5208342,-58.7173721)),
			new DriverPosition(121, new Coordinate(-34.516597,-58.706859))
			]		
    }	, {
        id: 80,
        sender: new Coordinate(-34.5214965, -58.7010208),
		receiver: new Coordinate(-34.541765, -58.7160749),		
		availableDrivers: [
			new DriverPosition(105, new Coordinate(-34.5163721,-58.7046396)),
			new DriverPosition(201, new Coordinate(-34.5239563,-58.7135244)),
			new DriverPosition(222, new Coordinate(-34.5298479,-58.6981285))
		]
    }

]

exports.list = function() {
    return requests;
}

exports.get = function(id) {
    return requests.filter(request => request.id == id)[0];
}