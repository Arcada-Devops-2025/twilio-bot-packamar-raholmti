const express = require('express');
const response = require('twilio').twiml.VoiceResponse;
const PORT = 3000

const app = express()

app.post('/voicecall', (req, res) => {
    const twilio = new VoiceResponse()
    twilio.say('Hello')

    response.type('text/xml')
    response.send(twilio.toString())
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})