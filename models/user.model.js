const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isDoctor: { type: Boolean, default: false },
});

module.exports = model("usuario", userSchema);
