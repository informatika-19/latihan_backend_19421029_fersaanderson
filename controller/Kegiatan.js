const  kegiatanModel = require('../model/Kegiatan')

exports.create = (data) =>
new Promise((resolve, reject) =>{
    //fungsi untuk menyimpan kegiatan
    kegiatanModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil Input Kegiatan'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal Input kegiatan'
    }))
})