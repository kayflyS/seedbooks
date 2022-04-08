const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const foodRoute = require('./routes/food');

require('dotenv').config()
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/foodapp', () => {
    console.log('Database is running');
})


app.get('/', (req, res)=> {
    res.send('Food App is working')
})


app.use('/food', foodRoute)


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})