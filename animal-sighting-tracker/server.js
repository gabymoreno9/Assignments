const express = require('express');
const postgres = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const database = new postgres.Pool({
    user: 'gabbymoreno',
    host: 'localhost',
    database: 'animal-sighting-tracker',
    port: 5432
});

app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get('/sightings', function(request, response) {
    let query = `
      SELECT nickname, sighting_location, appeared_healthy, contact
      FROM sightings
      JOIN individuals ON individuals.id = sightings.individual_seen`

    database.query(query, function(error, results) {
        if (error) { throw error; }
        response.json(results.rows);
    });
});

app.post('/add-sighting', function(request, response) {
    let query = `
        INSERT INTO sightings (individual_seen, sighting_location, appeared_healthy, contact)
        VALUES ($1, $2, $3, $4)`;
    let parameters = [
        request.body.individual_seen,
        request.body.sighting_location,
        request.body.appeared_healthy,
        request.body.contact
    ];

    database.query(query, parameters, function(error, results) {
        if (error) { throw error; }
        response.json(results.rows);
    });
});

// Start the server
app.listen(8888, () => console.log("Started animal-sighting-tracker on port 8888"))
