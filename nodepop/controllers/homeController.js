import { query, validationResult } from 'express-validator'
import Anuncio from '../models/Anuncios.js'


export async function index (req, res, next) {
    try {
         res.locals.anuncios = await Anuncio.find()
         res.render('home')
        
    } catch (error) {
        next(error)
    }

   
}

// POST /post_with_body
export function postWithBody(req, res, next) {
     const { age, color } = req.body
     res.send('ok')
}