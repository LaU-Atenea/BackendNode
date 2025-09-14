export function index (req, res, next) {

    res.locals.users = [
        { name: 'Moto Scooter 125cc', precio: 2300, propietario: 'admin', imagen: 'moto', tags: [ 'lifestyle', 'motor']  },
        { name: 'iPhone 15', precio: 500, propietario: 'admin', imagen: 'iPhone', tags: [ 'lifestyle', 'mobile'] },
        { name: 'Sudadera mujer', precio: 35, propietario: 'user1', imagen: 'sudadera', tags: [ 'lifestyle'] },
        { name: 'Portatil HP gris', precio: 200, propietario: 'admin', imagen: 'moto', tags: [ 'lifestyle', 'work'] }
    ]

    res.render('home')
}