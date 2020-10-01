
const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const app = express();
const routes = require('./routes')

app.use(Cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(routes)

//Handle errors
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(process.env.PORT || 4000, () => {
    console.log('Server started')
});