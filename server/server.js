const express = require('express');
const cors = require('cors');
const characterRouter = require('./routers/characterRouter');
// const favouritesRouter = require('./routers/favouritesRouter');
const usersRouter = require('./routers/usersRouter');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/characters', characterRouter);
//app.use('/favourites', favouritesRouter);
app.use('/users', usersRouter);


app.use((err, req, res, next) => {
    res.status(500).send({
        error: 'Something went wrong',
        message: err
    });
});

app.listen(8080, () => {
    console.log('Server running on port 8080')
});

module.exports = app;