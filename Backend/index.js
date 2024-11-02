const express = require('express')
const mongoose = require('mongoose')
const mcqrouter = require('./routes/mcq')
const UserRouter = require('./routes/User')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))
mongoose.connect('mongodb://127.0.0.1:27017/mcq-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});
app.use(express.json())
app.use(cookieParser())

app.use('/mcq',mcqrouter)
app.use('/',UserRouter)


app.listen(4000,()=>{
    console.log("server connected");
})