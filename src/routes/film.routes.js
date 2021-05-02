import {Router} from 'express'
const router = Router()

import * as filmCtrl from '../controllers/film.controller'
import {authJwt} from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], filmCtrl.createFilm)

router.get('/', filmCtrl.getFilm)

router.get('/:filmId', filmCtrl.getFilmById)

router.put('/:filmId', [authJwt.verifyToken, authJwt.isAdmin], filmCtrl.updateFilmById)

router.delete('/:filmId', [authJwt.verifyToken, authJwt.isAdmin], filmCtrl.deleteFilmById)

export default router