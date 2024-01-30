const mongoose = require('mongoose');

const supermarketSchema = mongoose.Schema({

   
    Name:{
        type: String,
        required: true
    },
    Tell:{
        type: String,
        required: true
    },
  
    items:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }

 
})

module.exports = mongoose.model("SuperMarket",supermarketSchema)