const db = require('../data/dbConfig.js');

module.exports = { 
    listbyUsers, findBy, findById, addUser
    }

function listbyUsers() {
    return db('users').select('id', 'username', 'department');
}

function findBy (param) {
    return db('users').where(param);
}

// function findById (id) {
//     return db('users').where( { id }).first();
// }

// function addUser(user) {
//     return db('users')
//     .insert(user, 'id')
//     .then(id => {
//         const [id] = id;
//         return findById(id)
//     })
// }

async function addUser(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

function findById(id) {
    return db('users')
    .where( { id })
    .first();
}