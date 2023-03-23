const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
    },
    {
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
    },
];
const db = require('./../db.json')

const router = app => {
    app.get('/users', (request, response) => {
        response.send(users);
    });
    app.get('/', (request, response) => {
        response.send(db);
    });
}

module.exports = router;