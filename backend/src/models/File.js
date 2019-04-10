const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    //nome do arquivo fisico armazenado/ caminho
    path: {
        type: String,
        required: true
    }
}, {
    //data de criação e atualização
    timestamps: true,
    //
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

File.virtual('url').get(function(){
    const url = process.env.URL || 'http://localhost:3333';

    return `${url}/files/${encodeURIComponent(this.path)}`
})

module.exports = mongoose.model("File", File);