const { Schema, model } = require('mongoose');



const JokeSchema = new Schema({
    broma: {
        type: String,
        unique: true,
        required: [true, 'se requiere un chiste'],
        minlength: [5, 'Tu chiste es muy corto']
    }

})


const Joke = model("Joke", JokeSchema);
module.exports = Joke;