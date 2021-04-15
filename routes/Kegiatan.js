const router = require('express').Router()
const kegiatanController = require('../controller/Kegiatan')

router.post('/insert', (req, res) => {
    kegiatanController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router