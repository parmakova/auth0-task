'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

const authCheck = jwt({
    secret: '3DickAMrWTbU_6kfxJFFtIlP77247bROLjiNusUJrn0e1Ou_e5kq8vwIaF4VjiI_',
    audience: 'users-auth-api',
    issuer: "https://parmakovablaz.eu.auth0.com/",
    algorithms: ['RS256']
});


app.get('/api/public', (req, res) => {
    let users = [{
            id: 12231,
            name: 'Public user 1'
        },
        {
            id: 12234,
            name: 'Public user 2'

        },
        {
            id: 12245,
            name: 'Public user 3'
        }
    ];
    res.json(users);
})
app.use(authCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.get('/api/admin', authCheck, (req, res) => {
    console.log(req.body)
    let users = [{
            id: 12231,
            name: 'Admin user 1'
        },
        {
            id: 12234,
            name: 'Admin user 2'

        },
        {
            id: 12245,
            name: 'Admin user 3'
        }
    ];
    res.json(users);
})

app.listen(3001);
console.log('Listening on localhost:3001');