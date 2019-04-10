const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    //especie de relacionamento no mongoDB
    files: [{type: mongoose.Schema.Types.ObjectId, ref: "File"}]
}, {
    //data de criação e atualização
    timestamps: true
});

module.exports = mongoose.model("Box", Box);