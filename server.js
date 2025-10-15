const express = require('express')
const { twilio } = require('twilio')
const PORT = 3000

const app = express()

app.post('/voicecall', (req, res) => {
    const response = new twilio.VoiceResponse()
    twilio.say('Hello')

    response.type('text/xml')
    response.send(twilio.toString())
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})