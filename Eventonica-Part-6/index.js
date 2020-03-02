const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { EventRecommender } = require("./eventonicaPart1Classes")

const app = express()
const port = 8888
const er = new EventRecommender()


app.use(bodyParser.json())
app.use(cors({ origin: true, credentials: true }))


//////// GET ENDPOINTS ///////////

//array for the array of users
app.get('/users', (req, res) => {
    er.getUsers().then(result => res.send(JSON.stringify(result)))
})

//array for the array of events
app.get('/events', (req, res) => {
    er.getEvents().then(result => res.send(JSON.stringify(result)))
})

//find events by category
app.get('/events-by-category', function (request, response) {
    let category = request.query.category
    //console.log(category)
    er.findEventsByCategory(category)
        .then(result => response.send(JSON.stringify(result)))
})

//find events by date
app.get('/events-by-date', function(request, response){
    let date = request.query.date
    er.findEventsByDate(date)
        .then(result => response.send(JSON.stringify(result)))
})




///////// POST REQUESTS ///////

//delete user
app.post('/delete-user', (req, res) => {
    // console.log(req.body)
    er.deleteUser(req.body.username)
        .then(() => er.getUsers())
        .then(result => res.send(JSON.stringify(result)))
})

//delete event
app.post('/delete-event', (req, res) => {
    er.deleteEvent(req.body.eventTitle)
        .then(() => er.getEvents())
        .then(result => res.send(JSON.stringify(result)))
})

// addUser 
app.post('/add-user', (req, res) => {
    er.addUser(req.body.username)
        .then(() => er.getUsers())
        .then(result => res.send(JSON.stringify(result)))
})

// addEvent
app.post('/add-event', (req, res) => {
    er.addEvent(req.body.title, req.body.date, req.body.category)
        .then(() => er.getEvents())
        .then(result => res.send(JSON.stringify(result)))
})

//save user event
app.post('/save-user-event', (req, res) => {
    er.saveUserEvent(req.body.username, req.body.eventTitle)
        .then(() => er.getUsers())
        .then(result => res.send(JSON.stringify(result)))
})


///////// 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
