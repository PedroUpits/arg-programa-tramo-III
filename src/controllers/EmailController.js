const nodemailer = require ('nodemailer');
const EmailController = {}

EmailController.eviarEmail = (req,res) => {
    return res.json({mensaje: 'Ingreso correctamente'})
}


module.exports = EmailController;