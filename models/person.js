const { model } = require('mongoose');


module.exports = model('person',{
    name:String ,
    age: Number , 
    favoriteFoods: [String]
})