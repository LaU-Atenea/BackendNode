import readline from 'node:readline/promises'
import connectMongoose from './lib/connectMongoose.js'
import Anuncio from './models/Anuncios.js'
import User from './models/User.js'

const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)

const answer = await ask('Are you sure you want to delete database collections? (n)')
if (answer.toLowerCase() !== 'y') {
    console.log('Operation aborted.')
    process.exit()
}

await initAnuncios()
await initUsers()

await connection.close()

async function initAnuncios() {
    // delete all anuncios
    const result = await Anuncio.deleteMany()
    console.log(`Deleted ${result.deletedCount} anuncios.`)

    //create agents
    const insertResult = await Anuncio.insertMany([
        { name: 'Moto', precio: 3000 },
        { name: 'Telefono', precio: 300 },
        { name: 'Sudadera', precio: 50 },
        { name: 'Ordenador', precio: 700 },
    ])
    console.log(`Inserted ${insertResult.length} anuncios.`)
}

async function initUsers() {
    // delete all users
    const result = await User.deleteMany()
    console.log(`Deleted ${result.deletedCount} users.`)

    //create users
    const insertResult = await User.insertMany([
        { email: 'admin@example.com', password: await User.hashPassword('1234') },
        { email: 'user@example.com', password: await User.hashPassword('1234') },
    ])
    console.log(`Inserted ${insertResult.length} users.`)
}

async function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const result = await rl.question(question)
    rl.close()
    return result
}