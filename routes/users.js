import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
