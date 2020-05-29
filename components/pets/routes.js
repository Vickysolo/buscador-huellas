const express = require('express');
const response = require('../../utils/responseHandler');
const controller = require('./controller');

const router = express.Router();


router.post('/', (req, res) => {
    controller.addPet(req.body)
        .then((data) => {
            response.sucess(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        })
})

router.get('/', (req, res) => {
    controller.getPets()
        .then((data) => {
            response.sucess(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        })
})

router.patch('/:id', (req, res) => {
    controller.updatePet(req.params.id, req.body)
    .then((data) => {
        response.sucess(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error Interno', 500, e);
    })
})

router.delete('/:id', (req,res) => {
    controller.deletePet(req.params.id)
    .then(()=> {
        response.sucess(req, res, 'Animal eliminado', 200);
    })
    .catch(e => {
        response.error(req, res, 'Error', 500, e)
    })
})

module.exports = router