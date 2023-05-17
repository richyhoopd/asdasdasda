const { Schema, model } = require("mongoose");

const terapeutaSchema = new Schema(
  {
    userId: { type: String },
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: Number, required: true },
    password: { type: String, required: true },
    cedula: { type: String, required: true, unique: true },
    especializacion: { type: String, required: true},
    description: { type: String, required: true },
    status: {
        type: String,
        default: "pending",
      },
      timings: {
        type: Object,
        required: [true, "wrok timing is required"],
      },
  
  },
  { timestamps: true }
);

module.exports = model("terapeuta", terapeutaSchema);
