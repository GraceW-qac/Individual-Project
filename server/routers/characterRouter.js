const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.Characters.findAll();
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const [first = null] = await models.Characters.findAll({ where: { id: req.params.index } });
    if (first) {
        res.send(first);
    } else {
        res.status(404).send({ message: 'Character not found for index' + req.params.index });
    }
});

router.get('/get/:first_name', async (req, res) => {
    const [first = null] = await models.Characters.findAll({ where: { first_name: req.params.first_name } });
    if (first) {
        res.send(first);
    } else {
        res.status(404).send({ message: 'Character not found' + req.params.first_name });
    }
});

router.post('/post', async (req, res) => {
    console.log(req.body);
    console.log(req.body.status);
    const a = req.body.status
    if (["alive", "dead", "missing"].includes(a)) {
        await models.Characters.create(req.body);
        res.send();
    } else {
        res.status(400).send({ message: 'Invalid input. Please input; alive, dead or missing.' })
    }
});

router.delete('/delete/:index', async (req, res) => {
    models.Characters.destroy({
        where: { first_name: req.params.index }, limit: 1
    });
    res.send();
});

router.post('/update/:id', async (req, res) => {
    models.Characters.update(req.body, {
        where: { id: req.body.id }
    });
    res.send();
});

module.exports = router;