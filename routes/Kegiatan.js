const router = require('express').Router()
const kegiatanController = require('../controller/Kegiatan')

router.post('/insert', (req, res) => {
    kegiatanController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/getall', (req, res) => {
    kegiatanController.showAllData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
//
router.get('/getbyid/:id', (req, res) => {
    kegiatanController.showDataById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.put('/update/:id', (req, res) => {
    kegiatanController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.delete('/delete/:id', (req, res) => {
    kegiatanController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router