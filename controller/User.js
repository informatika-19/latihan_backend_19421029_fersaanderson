const  userModel = require('../model/User')
const bcrypt = require('bcrypt')

exports.register = (data) =>
new Promise((resolve, reject) =>{
//console.log(data)
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