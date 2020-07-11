const cors = require('cors')
const nodemailer = require('nodemailer')
const express = require('express')
const app = express()

// env variables
require('dotenv').config()

app.use(express.json())
app.use(cors())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_PRIMARY,
    pass: process.env.PASSWORD
  }
})

app.post('/api/email', (req, res) => {
  const { fullname, email, message } = req.body

  let mailOptions = {
    from: process.env.EMAIL_SECONDARY,
    to: process.env.EMAIL_PRIMARY,
    subject: `Portfolio message from ${fullname} (${email}).`,
    text: message
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) return res.status(400).json({ error: err })

    console.log(data)
    res.status(200).json({ data })
  })
})

// Port
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Running on port ${PORT}...`))
