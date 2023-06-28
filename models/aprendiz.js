const { Schema, model } = require('mongoose')

const schema_aprendiz = Schema({

    documento: {

        type: String,
        required: [true, 'El documento es obligatoria'],
        validate: {
            validator: (value) => {
                const er_documento = /^[0-9]+$/;
                return er_documento.test(value);
            },
        },

    },
    nombre: {

        type: String,
        validate: {
            validator: (value) => {

                const er_nombre = /^[A-Za-z\s]+$/;
                return er_nombre.test(value);

            }
        },

        required: [true, 'El documento es obligatoria']

    },

    nota_1: {

        type: Number,
        required: [true, 'La nota es obligatoria.1'],
        min: [0, 'Nota no puede ser menor a cero'],
        max: [5, 'Nota no puede ser mayor a cinco']

    },
    nota_2: {

        type: Number,
        required: [true, 'La nota es obligatoria.1'],
        min: [0, 'Nota no puede ser menor a cero'],
        max: [5, 'Nota no puede ser mayor a cinco']

    },
    nota_3: {

        type: Number,
        required: [true, 'La nota es obligatoria.1'],
        min: [0, 'Nota no puede ser menor a cero'],
        max: [5, 'Nota no puede ser mayor a cinco']

    },

    // promedio: {

    //     type: Number,
    //     min: [0, 'Nota no puede ser menor a cero'],
    //     max: [5, 'Nota no puede ser mayor a cinco']

    // }

})

module.exports = model('Aprendiz', schema_aprendiz)