const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.Users.findAll({
        include: [{
            model: models.Characters
        }]
    });
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const [first = null] = await models.Users.findAll({
        where: { username: req.params.index },
        include: [
            { model: models.Characters }
        ]
    });
    if (first) {
        res.send(first);
    } else {
        res.status(404).send({ message: 'User not found for index' + req.params.index });
    }
});

router.post('/post', async (req, res) => {
    const { fav_char_name, ...userData } = req.body;
    const char = await models.Characters.findOne({ where: { first_name: fav_char_name } })
    const newUser = await models.Users.create({ ...userData, characterInfoId: char.id });
    res.send(newUser);
});

router.delete('/delete/:index', async (req, res) => {
    models.Users.destroy({
        where: { id: req.params.index }, limit: 1
    });
    res.send();
});

router.put('/update', async (req, res) => {
    models.Users.update(req.body, {
        where: { id: req.body.id }
    });
    res.send();
});

module.exports = router;