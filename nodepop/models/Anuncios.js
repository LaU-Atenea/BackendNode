import mongoose, { Schema } from 'mongoose'

//definir el esquema de los agentes
const anuncioSchema = new Schema({
    name: String,
    precio: Number
}, {
    collection: 'anuncios'
})

// crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema)

export default Anuncio