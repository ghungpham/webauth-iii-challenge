const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js')
const checkRole = require('../auth/checkRole');

router.get('/users', restricted, checkRole('member'), (req, res) => {
    Users.listbyUsers()
    .then(users => {
        res.json(users)
    })
    .catch(err => res.send(err));
});

module.exports = router;