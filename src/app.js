import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import {createRoles} from './libs/initialSetup'

import characterRoutes from './routes/character.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'
import filmRoutes from './routes/film.routes'

const app = express()
createRoles()

app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/characters', characterRoutes)
app.use('/api/films', filmRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app