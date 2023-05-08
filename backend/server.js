const express = require('express')
const cors = require("cors");
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use('/api/film', require('./Routes/filmsRoute'))
//app.use('/api/country', require('./Routes/countryRoute'))
app.use('/api/partner', require('./Routes/partnersRoute'))
app.use('/api/cinema', require('./Routes/cinemaRoute'))
app.use('/api/categorie', require('./Routes/categorieRoure'))
//app.use('/api/upload',express.static('./Controllers/UploadFile'))

//app.use('/api/imageUpload',require('./Controllers/imageUplode'))
app.use(errorHandler)

app.listen(port, () => { console.log(`Server Started in port : ${port}`) })