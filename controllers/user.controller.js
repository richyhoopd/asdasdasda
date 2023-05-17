const ctrl = {};

const Usuario = require("../models/user.model");

const bcrypt = require("bcryptjs");

ctrl.obtenerTodos = async (req, res) => {
  res.json(await Usuario.find());
};

ctrl.registrarUsuario = async (req, res) => {
  const { nombre, correo, password, telefono } = req.body;

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  console.log(telefono);
  const newUsuario = new Usuario({
    nombre,
    correo,
    telefono: telefono,
    password: hash,
  });

  await Usuario.findByIdAndUpdate(newUsuario.id, {
    telefono: telefono,
  });

  try {
    await newUsuario.save();

    const codigo = newUsuario.id.slice(0, newUsuario.id.length - 16);

    await Usuario.findByIdAndUpdate(newUsuario.id, {
      codigo,
      direccion: "Null",
    });

    res.json(newUsuario);
  } catch (err) {
    res.json({ error: err });
    console.log("ERROR: " + err);
  }
};

ctrl.obtenerUno = async (req, res) => {
  const { id } = req.params;

  const usuario = await Usuario.findById(id);

  res.json(usuario);
};

ctrl.iniciarSesion = async (req, res) => {
  const { correo, password } = req.body;

  const usuarios = await Usuario.find();

  var resp = {};

  usuarios.map((u) => {
    if (
      u.correo == correo &&
      bcrypt.compareSync(password, u.password) &&
      u.verificado
    ) {
      resp = u;
      return;
    }
  });

  res.json(resp);
};

module.exports = ctrl;
