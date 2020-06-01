const express = require('express');
const pets = require('../components/pets/routes')
const lostAndFound = ('../components/lostAndFound/routes')


const routes = function (server){
  server.use('/lost-found', lostAndFound);
  // server.use('/user', user);
  server.use('/pets', pets);
}

module.exports = routes;