const express = require('express');
const app = express();

// Le dice a express dónde están los elementos estáticos
app.use(express.static('public'));


// Inicia el servidor en el puerto 3030
app.listen(3030, ()=>{
    console.log('Mercado Liebre 1.0.1dh corriendo en el puerto 3030');
});

// Atiende la vista home
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/home.html');
});

// Atiende la vista registro
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/src/views/register.html');
});

// Atiende la vista login
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/src/views/login.html');
});

// Atiende la vista search
app.get('/ej', (req,res)=>{
    res.sendFile(__dirname + '/src/views/ej.html');
});