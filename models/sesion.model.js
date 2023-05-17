const {Schema, model} = require('mongoose');

const sesionSchema = new Schema({
    userId: {
        type: String,
        required: true,
      },
      terapeutaId: {
        type: String,
        required: true,
      },
      infoTerapeuta: {
        type: String,
        required: true,
      },
      userInfo: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
        default: "pending",
      },
      time: {
        type: String,
        required: true,
      },
});

module.exports = model('terapeuta', schema);

