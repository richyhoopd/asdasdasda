const ctrl = {};
const Fechas = require('../models/fechas.model');

ctrl.obtenerFechaDisponible = async(req, res)=>{
    const fecha = req.params.fecha.split('-');

    /*await new Fechas({
        id_terapist: 'paerlaaaaaaaa',
        fecha: new Date('2023-05-20')
    }).save();
    */
    const fechas = await Fechas.find();
    
    const aux = [];
    fechas.map((f)=>{
        const date = f.fecha;
        const userDate = new Date();
        userDate.setDate(fecha[2]);
        userDate.setMonth(fecha[1]-1);
        userDate.setFullYear(fecha[0]);

        
        const fechaTXT = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
        const fechaTXTUsr = `${userDate.getDate()}-${userDate.getMonth()+1}-${userDate.getFullYear()}`


        console.log('User:',fechaTXTUsr);
        console.log('Other:',fechaTXT);
    
        if(fechaTXT === fechaTXTUsr){
            aux.push(f);
        }
    
    })
    
    res.json(aux);
}

module.exports = ctrl;