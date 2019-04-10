const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports ={
    //não ter problema no caminho dos arquivos, padroniza os caminhos
    dest: path.resolve(__dirname, '..', '..', 'temp'),
    //como deseja armazenar, no banco, local, em nuvem
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, path.resolve(__dirname, '..', '..', 'temp'))
        },
        filename: (req, file, cb) => {
            //selecionar o numero de byter aleatorios
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
}