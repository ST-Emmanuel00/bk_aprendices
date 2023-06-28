const {mongoose} = require('mongoose');

coneccion_db = async()=>{
    try {

        await(mongoose.connect(process.env.link_db))
        console.log('Conectado');

    } catch (error) {

         console.log(error);
         
    }
}


module.exports = coneccion_db