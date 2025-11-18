// api/send-email.js (para Vercel Functions)
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = async (req, res) => { // Vercel Functions usan `req, res` al estilo Express
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const { nombre, telefono, email, asunto, mensaje } = req.body; // Vercel Functions ya parsean JSON

    if (!nombre || !telefono || !email || !asunto || !mensaje) {
      res.status(400).json({ message: 'Todos los campos son obligatorios.' });
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'supercre18hogar@gmail.com',
      subject: `Mensaje de contacto de Credihogar: ${asunto}`,
      html: `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${asunto}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
            `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: '¡Correo enviado exitosamente!' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo.', error: error.message });
  }
};