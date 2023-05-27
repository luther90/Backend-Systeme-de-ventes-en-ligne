const express = require('express')
const stuffCtrl = require('../controllers/stuff')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const router = express.Router()


router.post('/', auth, multer, stuffCtrl.createThing);

router.get('/', auth, stuffCtrl.getAllThing);

router.get('/:id', auth, stuffCtrl.getThing);

router.put('/:id', auth, multer, stuffCtrl.updateThing);

router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router