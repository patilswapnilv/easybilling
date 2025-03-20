const nodemailer = require('nodemailer');
const config = require('config');

// Create transporter
// Note: For production, consider using a service like SendGrid or Mailgun. Also, store email credentials securely.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('emailUser'),
    pass: config.get('emailPassword'),
  },
});

// Send invoice email
exports.sendInvoiceEmail = async (invoice) => {
  const mailOptions = {
    from: config.get('emailUser'),
    to: invoice.clientEmail,
    subject: `Invoice from EasyBilling`,
    text: `You have a new invoice totaling $${invoice.totalAmount.toFixed(2)}.`,
    // You can also send HTML content
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Invoice email sent');
  } catch (err) {
    console.error('Error sending email:', err.message);
  }
};
