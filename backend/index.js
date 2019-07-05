//llamamos al modulo de express y se lo pasamos a un constante.
const express = require('express')
const morgan = require('morgan')
const multer = require('multer')

//ahora se crea el servidor y se lo asigna a la constante app
const app = express()

//configuraciones previas
app.set('port', 3000) 

//Middlewares
app.use(morgan())

//inicializamos el servidor
//vamos a decirle al servidor que escuche en el tal puerto
//luego llamamos a una funcion anonima que solo muestra en pantalla el mensaje 
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})

