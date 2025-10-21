//here the tests will be

const request = require('supertest')
const { app, getRandomMeal, vegetarianMeals, meatMeals, fishMeals } = require('./server')

describe('Twilio Dinner Bot', () => {

//getRandomMeal-test
    it('getRandomMeal should return an item from the array', () => {
        const meal = getRandomMeal(vegetarianMeals)
        expect(vegetarianMeals).toContain(meal)
    });

//gather-test
    it('POST /voicecall should return a Gather TwiML', async () => {
        const res = await request(app)
            .post('/voicecall')
            .send()

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
        const matched = vegetarianMeals.some(meal => res.text.includes(meal))
        expect(matched).toBe(true)
    })
})
