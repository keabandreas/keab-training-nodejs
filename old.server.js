const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 2000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load email configuration
let emailConfig;
try {
  emailConfig = JSON.parse(fs.readFileSync('email-config.json', 'utf8'));
  console.log('Email configuration loaded:', emailConfig);
} catch (error) {
  console.error('Failed to read email-config.json. Using default configuration.');
  emailConfig = {
    SMTP_SERVER: process.env.SMTP_SERVER || 'smtp.example.com',
    SMTP_PORT: process.env.SMTP_PORT || 587,
    FROM_EMAIL: process.env.FROM_EMAIL || 'noreply@example.com',
    TO_EMAIL: process.env.TO_EMAIL || 'recipient@example.com'
  };
  console.log('Using email configuration:', emailConfig);
}

// Create a transporter using the provided SMTP settings
const transporter = nodemailer.createTransport({
  host: emailConfig.SMTP_SERVER,
  port: emailConfig.SMTP_PORT,
  secure: false, // Use TLS
  tls: {
    rejectUnauthorized: false // Ignore self-signed certificate errors
  }
});

app.post('/submit-form', (req, res) => {
  const { firstName, lastName, company, email } = req.body;
  console.log('Received form submission:', { firstName, lastName, company, email });

  const mailOptions = {
    from: emailConfig.FROM_EMAIL,
    to: emailConfig.TO_EMAIL,
    subject: 'Training Completion Notification',
    text: `${firstName} ${lastName} (${email}) from ${company} has completed the training.`
  };

  console.log('Sending email with options:', mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
  
  // Test SMTP connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP connection error:', error);
    } else {
      console.log('SMTP connection successful');
    }
  });
});
