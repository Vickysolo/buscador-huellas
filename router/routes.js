const express = require('express');
const pets = require('../components/pets/routes')


const routes = function (server){
  // server.use('/pet-card', petCard);
  // server.use('/user', user);
    server.use('/pets', pets);
}

module.exports = routes;