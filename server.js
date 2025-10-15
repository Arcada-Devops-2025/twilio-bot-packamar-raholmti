const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const bodyParser = require('body-parser');   
const PORT = 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/voicecall', (req, res) => {
    const twiml = new VoiceResponse()
    twiml.say('Hello')

    response.type('text/xml')
    response.send(twilio.toString())
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})