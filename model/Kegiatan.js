const monggose = require('mongoose')
const Schema = monggose.Schema

const KegiatanSchema = new Schema({
    namaKegiatan: {
        type: String
    },
    deskripsi: {
        type: String
    },
    waktu: {
        type: String
    }
})

module.exports = monggose.model('kegiatan', KegiatanSchema)