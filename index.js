const nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const PORT = process.env.PORT || 5500;
const mongoose = require('mongoose');
let server =  express(); 
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'Client','dist')));

server.use('/api/admin',require('./routes/admin.route'));
server.use('/api/player',require('./routes/players.route'));
server.use('/api/memoryGame',require('./routes/memoryGame.route'));
server.use('/api/triviaGame',require('./routes/triviaGame.route')); 
//server.use('/api/beeInfoPages',require('./routes/beeInfoPage.route'));
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Update with your email service
  auth: {
    user: 'your-email@gmail.com', // Update with your email
    pass: 'your-password', // Update with your email password
  },
});
server.get('/*', async (req, res) => {
    try {
      res.status(200).sendFile(path.join(__dirname, 'Client','dist', 'index.html'));
    } catch (error) {
      res.status(500).json({error});
    }
  });
  const secretKey = 'your-secret-key';
  const mongoURI = 'mongodb+srv://GUTS:jacob00045052@cluster0.epjctzx.mongodb.net/?retryWrites=true&w=majority;' // Replace with your MongoDB URI
  app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
  
    // Check if the email exists in your database
    const user = users.find((user) => user.email === email);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
  
    // Generate a JWT token with the user's email (you can add expiration here)
    const resetToken = jwt.sign({ email: user.email }, secretKey);
  
    // Compose the reset email
    const emailMessage = {
      text: 'Click the following link to reset your password:',
      from: 'your-email@example.com',
      to: email,
      subject: 'Password Reset',
      attachment: [
        { data: `<a href="http://your-app/reset-password/${resetToken}">Reset Password</a>`, alternative: true },
      ],
    };
  
    // Send the reset email
    emailServer.send(emailMessage, (err, message) => {
      if (err) {
        console.error('Email sending failed:', err);
        return res.status(500).json({ message: 'Email sending failed.' });
      }
      console.log('Reset email sent:', message);
      return res.status(200).json({ message: 'Reset email sent successfully.' });
    });
  });
// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  // Start your Express server here

});

server.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 