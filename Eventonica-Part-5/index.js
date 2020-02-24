const express = require('express')
const bodyParser = require('body-parser')
const { EventRecommender, User, Events } = require("./eventonicaPart1Classes")

const app = express()
const port = 8888
const er = new EventRecommender()

er.addUser("Gabby")
er.addUser("Michi")
er.addEvent("Gabby's Movie Night", "April 20, 2020", "Movies")
er.addEvent("Micho's Piano Night", "April 22, 2020", "Music")


app.use(bodyParser.json())


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
app.post('/delete-user', (req, res) => {
    // console.log(req.body)
    er.deleteUser(req.body.username)
    res.send(JSON.stringify(er.users))
})

//delete event
app.post('/delete-event', (req, res) => {
    er.deleteEvent(req.body.eventTitle)
    res.send(JSON.stringify(er.events))
})

// addUser 
app.post('/add-user', (req, res) => {
    er.addUser(req.body.username)
    res.send(JSON.stringify(er.users))
})

// addEvent
app.post('/add-event', (req, res) => {
    er.addEvent(req.body.title, req.body.date, req.body.category)
    res.send(JSON.stringify(er.events))
})

//save user event
app.post('/save-user-event', (req, res) => {
    er.saveUserEvent(req.body.username, req.body.eventTitle)
    res.send(JSON.stringify(er.events))
})


///////// 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
