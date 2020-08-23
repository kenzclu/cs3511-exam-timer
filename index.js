const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/timer.html'))
})

app.use(express.static(__dirname + '/public'))
app.use('/', router)
app.listen(process.env.port || 3000)
console.log(`Now serving timer on localhost:${process.env.port || 3000}`)