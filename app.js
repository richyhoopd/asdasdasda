const express = require('express');
const cors = require('cors');
// const cloudinary = require("cloudinary").v2;
// const fileUpload = require("express-fileupload");
const app = express();
const dotenv = require('dotenv');


/*      Configuración     */
//Asignación del puerto del servidor
app.set('port', process.env.PORT || 4000);

/*       Middlewares       */
//Activar dotenv
dotenv.config()
//Activar cors
app.use(cors());
app.use(cors({ origin: true }));
//activar JSON y uso de archivos
app.use(express.json());
// app.use(fileUpload({
//     useTempFiles: true,
//     limits: {fileSize: 50 * 2024 * 1024}
// }))

//Configuracion de Cloudnary
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_NAME
//                 ? process.env.CLOUDINARY_NAME
//                 : 'dzajaf1mv', 
//     api_key: process.env.CLOUDINARY_API_KEY
//                 ? process.env.CLOUDINARY_API_KEY
//                 : '414987381238598', 
//     api_secret: process.env.CLOUDINARY_SECRET 
//                 ? process.env.CLOUDINARY_SECRET
//                 : '9gnctjNZf5N3hGdIkwKej-4w5-A'
//   });

/*      Ruta        */
app.get('/', (req, res)=>{
    res.send("Bienvenido al backend de chipsi");
});

/*      Rutas del API       */
//Productos

//Usuario
app.use('/api/usuario', require('./routes/user.routes'));
// app.use('/api/direccion', require('./routes/direccionUsuario.routes'));

//Productos
// app.use('/admin/celular', require('./routes/productos/celular.routes'));
// app.use('/admin/proveedor/celular', require('./routes/proveedores/celular.proveedor.routes'));

// app.use('/admin/laptop', require('./routes/productos/laptop.routes'));
// app.use('/admin/proveedor/laptop', require('./routes/proveedores/laptop.proveedor.routes'));

// app.use('/admin/pc', require('./routes/productos/pc.routes'));
// app.use('/admin/proveedor/pc', require('./routes/proveedores/pc.proveedor.routes'));

// app.use('/admin/consola', require('./routes/productos/consola.routes'));
// app.use('/admin/proveedor/consola', require('./routes/proveedores/consola.proveedor.routes'));

// app.use('/admin/control', require('./routes/productos/control.routes'));
// app.use('/admin/proveedor/control', require('./routes/proveedores/control.proveedor.routes'));

// app.use('/admin/tableta', require('./routes/productos/tableta.routes'));
// app.use('/admin/proveedor/tableta', require('./routes/proveedores/tableta.proveedor.routes'));

// app.use('/admin/smartwatch', require('./routes/productos/smartwatch.routes'));
// app.use('/admin/proveedor/smartwatch', require('./routes/proveedores/smartwatch.proveedor.routes'));

// //Marca y problemas
// app.use('/admin/problema', require('./routes/problema.routes'));
// app.use('/admin/marca', require('./routes/marca.routes'));

// app.use('/api/direccion', require('./routes/direccionUsuario.routes'))

app.use('/fecha', require('./routes/fechas.routes'));
module.exports = app;