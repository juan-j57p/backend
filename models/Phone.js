  const mongoose = require('mongoose');
  const { model, Schema } = mongoose;
  
  const phoneSchema = new Schema ({
    name : String,
    number : String
  })
   
  phoneSchema.set("toJSON", {
    transform: (document, returnedObject)=> {
      returnedObject.id = returnedObject._id;
      delete returnedObject._id;
      delete returnedObject.__v;
    }
  })
 
  const Phone = model ('Phone', phoneSchema);
 /*const person = new Person ({
    name : 'Juan Pablo Arias Sanabria',
    number : '3001234567'
  });

  person.save()
    .then( result => {
      console.log(result);
      mongoose.connection.close();  
    })
    .catch (err => {
      console.log(err);
    });*/

  module.exports = Phone;

