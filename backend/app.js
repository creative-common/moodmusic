var express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Applying middlewares
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Mood Music server online!")
})

app.listen(1200, () => {
    console.log("Mood Music server online!")
})