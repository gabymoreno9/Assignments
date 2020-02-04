
class User {
    constructor(username){
        this.username = username;
        this.savedEvents = [];
    }

    saveEvent(event) {
        this.savedEvents.push(event);
    }
}

class Event {
    constructor(name, date, category){
        this.name = name;
        this.date = date;
        this.category = category;
    }
}



class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
    }

    addEvent(event) {
        // Adds a new Event to the System
        this.events.push(event)
    }

    addUser(user) {
        // Adds a new User to the System
        this.users.push(user)
    }

    saveUserEvent(user, event){
        // Allow users to save events to a personal Events array.
        user.saveEvent(event)
    }

    deleteUser(user) {
        // Deletes a User from the system
        this.users = this.users.filter(function(item) { 
            return item !== user
        })
    }
   
    deleteEvent(event) {
        // Deletes the Event from the system
        this.events = this.events.filter(function(item) {
            return item !== event
        })
    }

    findEventsByDate(date){
        // Returns all events on a given date 
        return this.events.filter(function(event){
            return event.date === date;
        })
    }
    
    findEventsbyCategory(category){
        // Returns all events in a given category
        return this.events.filter(function(event){
            return event.category === category;
        })
    }
}


let recommender = new EventRecommender();
let gabby = new User("gibbyyyy");
let mitchell = new User("michoooo");
let kittyPetting = new Event("Pet lots of kitties", "February 5", "animals");

recommender.addUser(mitchell);
recommender.addUser(gabby);
recommender.addEvent(kittyPetting);
recommender.saveUserEvent(gabby, kittyPetting);
recommender.saveUserEvent(mitchell, kittyPetting);

console.log(recommender.users)

module.exports = { EventRecommender, User, Event}