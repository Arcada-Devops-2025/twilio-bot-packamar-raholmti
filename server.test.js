//here the tests will be
const request = require('supertest')
//import the arrays and functions
const { app, getRandomMeal, vegetarianMeals } = require('./server')

describe('Twilio Dinner Bot', () => {

//looking for getRandomMeal to return a dinner that actually exists in the array
    it('getRandomMeal should return an item from the array', () => {
        const meal = getRandomMeal(vegetarianMeals)
        expect(vegetarianMeals).toContain(meal)
    });

//gather-test
    it('POST /voicecall should return a Gather TwiML', async () => {
        const res = await request(app).post('/voicecall')
        expect(res.status).toBe(200)
        expect(res.type).toBe('text/xml')
        expect(res.text).toContain('<Gather')
    })

//test for pressing 1
    it('POST /handle-key with Digits=1 should return a vegetarian meal', async () => {
        const res = await request(app)
            .post('/handle-key')
            .type('form')
            .send({ Digits: '1' })

        expect(res.status).toBe(200)
        expect(vegetarianMeals.some(meal => res.text.includes(meal))).toBe(true)
    })
})