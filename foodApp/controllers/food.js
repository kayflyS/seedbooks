const Food = require('../models/Meal');

exports.createMeal = async(req,res) => {


   const {name, price, available} = req.body;

   const meal = await Food.create({
        name,
        price,
        available

    })

    return res.status(200).json(meal)
}



exports.getMeals = async(req,res) => {
    const meals = 
}