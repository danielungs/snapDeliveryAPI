var exports = module.exports = {};

var help = {
    welcome: 'Bienvenidos a Snap Delivery API!',
    urls: {
        'GET': {
            '/api/requests/': {			
                "descripción": "Lista los pedidos.",
                "ejemplo": "/api/requests/"
            },
            '/api/requests/:request_id': {
                "descripción": "Obtiene un pedido con id :request_id",
                "ejemplo": "/api/requests/42"
            },
            '/api/drivers/': {
                "descripción": "Lista los conductores encargados de las entregas.",
                "ejemplo": "/api/drivers/"
            },
            '/api/drivers/:driver_id': {
                "descripción": "Obtiene el conductor con id :driver_id",
                "ejemplo": "/api/drivers/201"
            },
			'/api/drivers/:driver_id/positions/': {
                "descripción": "Obtiene las posiciones de un repartidor con id :driver_id",
                "ejemplo": "/api/drivers/201/positions/"
            },
            '/api/incidents/': {
                "descripción": "Lista los incidentes reportados.",
                "ejemplo": "/api/incidents/"
            },
            '/api/incidents/:incident_id': {
                "descripción": "Obtiene el incidente con id :incident_id",
                "ejemplo": "/api/incidents/81"
            },
            '/api/incidenttypes': {
                "descripción": "Lista los tipos de incidentes.",
                "ejemplo": "/api/incidenttypes/"
            },
            '/api/incidenttypes/:type_id': {
                "descripción": "Obtiene el tipo de incidente con id :type_id",
                "ejemplo": "/api/incidenttypes/1"
            },
			'/api/cabstand/': {
                "descripción": "Lista los paradas.",
                "ejemplo": "/api/cabstand/"
            },
            '/api/cabstand/:cabstand_code': {
                "descripción": "Obtiene la parada con codigo :cabstand_code",
                "ejemplo": "/api/cabstand/HS01"
            }
			
        }
    }
}

exports.list = function() {
    return help;
}
