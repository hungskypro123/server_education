const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.json');
const routes = require('./routes/routes');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
 
routes(app);
 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port http://localhost:${server.address().port}`);
});