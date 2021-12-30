require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const models = require('./models/models')
const cors = require('cors')


const app = express()


app.use(cors())
app.use(express.json({ extented: true }))
app.use('/api', require('./routes/index'))

const PORT = process.env.PORT || 5000




const start = async() => {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log('Server started on port ' + PORT))

}
start()