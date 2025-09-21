import path from 'node:path'
import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import * as homeController from './controllers/homeController.js'
import connectMongoose from './lib/connectMongoose.js'

await connectMongoose()
console.log('Connected to MongoDB.')

const app = express()

// view engine setup
app.set('views', 'views')
app.set('view engine', 'ejs')

app.locals.appName = 'NodePop'

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(import.meta.dirname, 'public')))

/**
 * Application routes
 */

app.get('/', homeController.index)
app.post('/post_with_body', homeController.postWithBody)

//catch 404 and send error
app.use((req, res, next) => {
    next(createError(404))
})

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    // set locals, including error information in development
    res.locals.message = err.message
    res.locals.error = process.env.NODEAPP_ENV === 'development' ? err : {}

    res.render('error')
})

export default app 