

const mongoose = require('mongoose');
require('dotenv').config();  

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


;

// Create a new Person instance
const newPerson = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Burgers']
});

newPerson.save(function(err, data) {
  if (err) {
    console.error('Error saving person:', err);
  } else {
    console.log('Person saved successfully:', data);
  }
});


const people = [
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Tacos'] },
  { name: 'Bob', age: 32, favoriteFoods: ['Pasta', 'Steak'] },
  { name: 'Charlie', age: 28, favoriteFoods: ['Burgers', 'Fries'] }
];

Person.create(people, function(err, data) {
  if (err) {
    console.error('Error creating people:', err);
  } else {
    console.log('People created successfully:', data);
  }
});

Person.find({ name: 'Alice' }, function(err, data) {
  if (err) {
    console.error('Error finding people by name:', err);
  } else {
    console.log('People found:', data);
  }
});

Person.findOne({ favoriteFoods: 'Sushi' }, function(err, data) {
    if (err) {
        console.error('Error finding people by name:', err);
      } else {
        console.log('People found:', data);
      }
    });


    Person.findById({ age: '32' }, function(err, data) {
        if (err) {
            console.error('Error finding people by name:', err);
          } else {
            console.log('People found:', data);
          }
        });


        Person.findOneAndUpdate({ age: '32' }, function(err, data) {
            if (err) {
                console.error('Error finding people by name:', err);
              } else {
                console.log('People found:', data);
              }
            });


            Person.findByIdAndRemove({ favoriteFoods: 'sushi' }, function(err, data) {
                if (err) {
                    console.error('Error finding people by name:', err);
                  } else {
                    console.log('People found:', data);
                  }
                });

            


    





   

