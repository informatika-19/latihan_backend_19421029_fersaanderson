const  userModel = require('../model/User')
const bcrypt = require('bcrypt')

//
exports.register = (data) =>
new Promise((resolve, reject) =>{
//console.log(data)
// ini coding untuk mencari 1 data
userModel.findOne({
    username: data.username
}).then(adauser => {
    if (adauser){
        resolve({
            status: false,
            pesan: 'username sudah terdaftar'
        })
    }else {
        bcrypt.hash(data.password, 10, (err, hash) =>{
            data.password = hash
            //membuat data
            userModel.create(data)
            .then(() =>{
            //console.log('berhasil insert')
            resolve({
                status:  true,
                pesan : 'berhasil Insert Data User'
            })
            }).catch((e) =>{
            //console.log(e)
            //console.log('gagal insert')
            reject({
                ststus: false,
                pesan: 'Gagal insert Data Baru'
            })
            })
        })    
    }
})

})
exports.login = (data) =>
new Promise((resolve, reject) =>{
    try {
        userModel.findOne({
            username: data.username
        }).then(user => {
            if (user) {
                if (bcrypt.compareSync(data.password, user.password)) {
                    resolve({
                        status: true,
                        pesan: 'Berhasil Login'
                    })
                } else {
                    reject({
                        status: false,
                        pesan: 'Password Tidak Sesuai'
                    })
                }
            } else {
                reject({
                    status: false,
                    pesan: 'Username Tidak terdaftar'
                })
            }
        })
    } catch (e) {
        console.log(e)
    }
})