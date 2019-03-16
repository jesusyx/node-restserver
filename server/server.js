require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')


//middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.get('/usuario', (req, res) => {
    res.json('get usuario')
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok:false,
            mensaje:"El nombre es requerido"
        })
    } else {
        res.json({
            persona:body
        });
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id: id
    })
});

app.delete('/usuario', (req, res) => {
    res.json('post usuario')
})

app.listen(process.env.PORT, () => console.log('escuchando el puerto 3000'));