require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const models = require('./models/models')
const sequelize = require('./db')
const errorMiddleware = require('./middleware/errorMiddleware')


const app = express()

app.use(express.static(path.join(__dirname, 'static')))


app.use(cors())
app.use(fileupload())
app.use(cookieParser())
app.use(express.json())
app.use('/api', require('./routes/index'))

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000




const start = async() => {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log('Server started on port ' + PORT))
}
start()