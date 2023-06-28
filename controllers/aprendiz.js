const { response } = require('express')
const Aprendiz = require('../models/aprendiz')
const { json } = require('body-parser')

const get_aprendices = async (req, res = response) => {

    let mensaje = ''
    try {

        const aprendices = await Aprendiz.find()
        mensaje = aprendices

        // Calcular el promedio
        let promedio = 0;
        
        promedio = aprendices.nota_1 + aprendices.nota_2 +aprendices.nota_3 / 3

        console.log(promedio)

    } catch (error) {

        mensaje = error

    }

    res.json({

        aprendices: mensaje


    })

}

const post_aprendiz = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    const aprendiz = new Aprendiz(body)

    try {

        await aprendiz.save({})
        mensaje = 'Aprendiz registrado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        aprendices: mensaje

    })

}

const put_aprendiz = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    try {

        if (body.tipodemodificacion == 'unitario') {
            await Aprendiz.findOneAndUpdate(
                { _id: body._id },
                {
                    documento: body.documento,
                    nombre: body.nombre,
                    nota_1: body.nota_1,
                    nota_2: body.nota_2,
                    nota_3: body.nota_3
                    // promedio: body.aprendices

                }
            )

            mensaje = 'Aprendiz actualizado exitosamente. Modificacion simple'

        } else {
            await Aprendiz.updateMany(

                { _id: body._id },
                {
                    documento: body.documento,
                    nombre: body.nombre,
                    nota_1: body.nota_1,
                    nota_2: body.nota_2,
                    nota_3: body.nota_3

                }

            )
            mensaje = 'Aprendiz actualizado . Modificación: Multiple'
        }

    } catch (error) {

        mensaje = error

    }
    res.json({

        aprendices: mensaje

    })

}

const delete_aprendiz = async (req, res) => {

    let mensaje = ''
    const body = req.body

    try {

        await Aprendiz.findOneAndDelete({ _id: body._id })
        mensaje = 'Aprendiz eliminado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        aprendices: mensaje

    })
}

module.exports = {

    get_aprendices,
    post_aprendiz,
    put_aprendiz,
    delete_aprendiz

}