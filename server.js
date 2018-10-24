var express    = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var help = require("./help.js");
var requests = require("./requests.js");
var drivers = require("./drivers.js");
var positions = require("./positions.js");
var incidents = require("./incidents.js");
var cabstand = require("./cabstand.js");

var version = {
    id: '1.0',
    name: 'hermes',
    lastupdate: Date.now()
}

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes will be /api/whatever
app.use('/api', router);

// Home -> Help
router.get('/', function(req, res) {
    console.log("GET /");
    //res.json(help.list());
	
	var response = {
        help: help.list(),
        version: version
    }
    res.json(response);
	
});

// requests
var urlRequest = '/requests/';
router.route(urlRequest)
    .get(function(req, res) {
        console.log("GET: " + urlRequest);
        console.log("Getting requests list...");

        var response = {
            requests: requests.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlRequest + ':request_id')
    .get(function(req, res) {
        console.log("GET: " + urlRequest + ':request_id');

        var id = req.params.request_id;
        console.log(id);

        var request = requests.get(id);
        console.log(request);

        if (!request) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Request Not found.');

            return;
        }

        var response = {
            request: request,
            version: version
        }
        res.json(response);
    });

// Driver
var urlDriver = '/drivers/';
router.route(urlDriver)
    .get(function(req, res) {
        console.log("GET: " + urlDriver);
        console.log("Getting drivers list...");

        var response = {
            drivers: drivers.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlDriver + ':driver_id')
    .get(function(req, res) {
        console.log("GET: " + urlDriver + ':driver_id');

        var id = req.params.driver_id;
        console.log(id);

        var driver = drivers.get(id);
        console.log(driver);

        if (!driver) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Driver Not found.');

            return;
        }

        var response = {
            driver: driver,
            version: version
        }
        res.json(response);
    });

// Positions
var urlPositions = urlDriver + ':driver_id' + '/positions/';

router.route(urlPositions)
    .get(function(req, res) {
        console.log("GET: " + urlPositions);

        var id = req.params.driver_id;
        console.log(id);

        var driver = drivers.get(id);
        console.log(driver);

        if (!driver) {
            res.status(404)
               .send('Driver Not found.');

            return;
        }

        var coordinates = positions.get(id);

        if (!coordinates) {
            res.status(404)
               .send('Positions Not found..');

            return;
        }
		
        var response = {
            driver_id: id,
            positions: coordinates,
            version: version
        }
        res.json(response);
    });

// Incident
var urlIncident = '/incidents/';
router.route(urlIncident)
    .get(function(req, res) {
        console.log("GET: " + urlIncident);
        console.log("Getting incidents list...");

        var response = {
            incidents: incidents.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlIncident + ':incident_id')
    .get(function(req, res) {
        console.log("GET: " + urlIncident + ':incident_id');

        var id = req.params.incident_id;
        console.log(id);

        var incident = incidents.get(id);
        console.log(incident);

        if (!incident) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Incident Not found.');

            return;
        }

        var response = {
            incident: incident,
            version: version
        }
        res.json(response);
    });

var urlIncidentTypes = '/incidenttypes/';
router.route(urlIncidentTypes)
    .get(function(req, res) {
        console.log("GET: " + urlIncidentTypes);
        console.log("Getting incident types list...");

        var response = {
            incidenttypes: incidents.types(),
            version: version
        }
        res.json(response);
    });
	
router.route(urlIncidentTypes + ':type_id')
    .get(function(req, res) {
        console.log("GET: " + urlIncidentTypes + ':type_id');

        var id = req.params.type_id;
        console.log(id);

        var incidenttype = incidents.gettype(id);
        console.log(incidenttype);

        if (!incidenttype) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Incident type Not found.');

            return;
        }

        var response = {
            incidenttype: incidenttype,
            version: version
        }
        res.json(response);
    });
	
// Cabstand
var urlCabstand = '/cabstand/';
router.route(urlCabstand)
    .get(function(req, res) {
        console.log("GET: " + urlCabstand);
        console.log("Getting cabstand list...");

        var response = {
            cabstand: cabstand.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlCabstand + ':cabstand_id')
    .get(function(req, res) {
        console.log("GET: " + urlCabstand + ':cabstand_id');

        var id = req.params.cabstand_id;
        console.log(id);

        var elem_cabstand = cabstand.get(id);
        console.log(elem_cabstand);

        if (!elem_cabstand) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Parada Not found.');

            return;
        }

        var response = {
            cabstand: elem_cabstand,
            version: version
        }
        res.json(response);
    });
	
// Server up!
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started at port ' + port);
});


//limitless-falls-59407