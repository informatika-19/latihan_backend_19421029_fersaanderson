const express = require('express')
const app = express()
const bodypanser = require('body-parser') 

app.use(bodypanser.json({
    extends: true,
    limit: '20mb' 
}))

app.use(bodypanser.urlencoded({
    extends: true,
    limit: '20mb'
}))

app.get('/', (req, res) => {
  res.send('<h1>Arif Sarman</h1>')
})

app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namadaerah = req.params.namadaerah
    const iddaerah = req.params.id
  res.send('Anda Di : ' + namadaerah + ' Id Daerah : ' + iddaerah)  
})
 
app.post('/register', (req, res) =>{
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => {
    console.log('server Startet')
})
