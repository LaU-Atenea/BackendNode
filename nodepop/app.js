import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import * as homeController from './controllers/homeController.js'

const app = express()

app.use(logger('dev'))

app.get('/', homeController.index)

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