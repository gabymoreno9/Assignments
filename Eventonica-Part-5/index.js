const express = require('express')
const app = express()
const { EventRecommender, User, Events } = require("./eventonicaPart1Classes")
const port = 8888

const er = new EventRecommender()

er.addEvent("Gabby's Movie Night", "April 20, 2020", "Movies")


//////// GET ENDPOINTS ///////////

//array for the array of users
app.get('/users', (req, res) => res.send(JSON.stringify(er.users)))

//array for the array of events
app.get('/events', (req, res) => res.send(JSON.stringify(er.events)))

//find events by category
app.get('/events-by-category', function (request, result) {
    let category = request.query.category
    //console.log(category)
    result.send(JSON.stringify(er.findEventsByCategory(category)))
})

//find events by date
app.get('/events-by-date', function(request, result){
    let date = request.query.date
    result.send(JSON.stringify(er.findEventsByDate(date)))

})





///////// POST REQUESTS ///////

//delete user
app.post('/', (req, res) => res.send('Hello World!'))

//delete event
app.post('/', (req, res) => res.send('Hello World!'))

// addUser 
app.post('/', (req, res) => res.send('Hello World!'))

// addEvent
app.post('/', (req, res) => res.send('Hello World!'))

//save user event
app.post('/', (req, res) => res.send('Hello World!'))


///////// 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
