import User from '../models/User.js'

export function index(req, res, next) {
    res.locals.error = ''
    res.render('login')
}

export async function postLogin(req, res, next) {
    try {
        const { email, password } = req.body

        // buscar el usuario en la base de datos
        const user = await User.findOne({ email: email })

        // si no lo encuentro o la contraseña no coincide -> error
        if (!user || !(await user.comparePassword(password))) {
            res.locals.error = 'Invalid credentials'
            res.render('login')
            return
        }

        // si el usuario existe y la contraseña es buena _> redirect a la home

        res.redirect('/')

    } catch (error) {
      next(error)
    }
}