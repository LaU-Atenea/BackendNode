import express from 'express'
import createError from 'http-errors'

const app = express()

app.use((req, res, next) => {
    // o respondemos o llamamos a next()
    console.log('LLega petición de tipo', req.method, 'a', req.url)
    next()
})

app.get('/', (req, res, next) => {
    res.send('hola')
})

//catch 404 and send error
app.use((req, res, next) => {
    next(createError(404))
})

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send('Ocurrió un error: ' + err.message)
})

export default app 