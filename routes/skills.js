import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/:id
router.get('/:id', skillsCtrl.show)

export {
  router
}