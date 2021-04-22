const  kegiatanModel = require('../model/Kegiatan')
const objectId = require('mongoose').Types.ObjectId

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

exports.showAllData = () =>
new Promise((resolve, reject) =>{
    kegiatanModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil menyimpan data',
                data : result
            })
        }).catch(() => reject({
            status : false,
            pesan : 'Gaggal menyimpan data',
            data : []
        }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) =>{
    kegiatanModel.findOne({
        _id: objectId(id)
    }).then(result =>{
        resolve({
            status : true,
            pesan : 'Berhasil menyimpan data',
            data : result
        })  
    }).catch(() => reject({
        status : false,
        pesan : 'Gagal menyimpan data',
        data : null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) =>{
    kegiatanModel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil mengubah data'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengubah data'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) =>{
    kegiatanModel.deleteOne({
        _id : objectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil menghapus data'
    })).catch(() =>({
        status: false,
        pesan: 'Gagal Menghapus data'
    }))
})
