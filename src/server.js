const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

//conexão em tempo real, requisição
io.on('connection', socket => {
    socket.on('connectRoom', box =>{
        socket.join(box);
    })
    
})

//conexão
mongoose.connect('', {
    useNewUrlParser: true
})

app.use((req, res, next) =>{
    req.io = io;

    return next();
})


//cadastrar um modulo dentro do express
app.use(express.json());
//permite envio de arquivos
app.use(express.urlencoded({extended: true}));
//buscar o arquivo fisico
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));
//rotas
app.use(require('./routes'));
//porta
server.listen(process.env.PORT || 3333);



