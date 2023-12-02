const mongoose = require('mongoose');

const CellphoneSchema = new mongoose.Schema({

   marca: {
    type: String,
    required: true,
   },
   modelo: {
    type: String,
    required: true
   },
   capacidade: {
    type: Number,
    required: true
   },
   data: {
    type: Date,
   }
});

const Cellphone = mongoose.model('Cellphone', CellphoneSchema);

module.exports = Cellphone;