import {Router} from 'express'
const router = Router()

import * as characterCtrl from '../controllers/character.controller'
import {authJwt} from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], characterCtrl.createCharacter)

router.get('/', characterCtrl.getCharacter)

router.get('/:characterId', characterCtrl.getCharacterById)

router.put('/:characterId', [authJwt.verifyToken, authJwt.isAdmin], characterCtrl.updateCharacterById)

router.delete('/:characterId', [authJwt.verifyToken, authJwt.isAdmin], characterCtrl.deleteCharacterByID)

export default router