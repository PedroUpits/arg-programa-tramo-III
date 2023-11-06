const nodemailer = require ("nodemailer");
const EmailController = {}

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: true,
    auth: {
        user: 'postmaster@sandboxdff14eba017b424992b4c4ef4f0e2d21.mailgun.org',
        pass: '5def97f909ed48ca0162499093091b75-3e508ae1-a09c84a7', 
    },
})

EmailController.enviarEmail = async (req,res) => {
    
    const info = await transporter.sendMail({
        from: '"Equipo Argentina Programa 👻" <argentina@programa.com.ar>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Bienvenido", // Subject line
        text: "Bienvenido Pedro", // plain text body
        html: "<b>Bienvenido a Argentina Programa!</b>", // html body
    })
}


module.exports = EmailController;