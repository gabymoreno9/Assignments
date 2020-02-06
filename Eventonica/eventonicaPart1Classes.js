
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
    constructor(title, date, category){
        this.title = title;
        this.date = date;
        this.category = category;
    }
}



class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
    }

    addEvent(title, date, category) {
        // Adds a new Event to the System
        //supposed to be an object, which we already have the event class
        //new Event(a, b, c)
        //instance of thde event class
        this.events.push(new Event(title, date, category));
    }

    addUser(username) {
        // Adds a new User to the System
        this.users.push(new User(username));
    }

    saveUserEvent(username, eventTitle){
        // Allow users to save events to a personal Events array.
        let user = this.users.find(function(item) { return item.username === username });
        let event = this.events.find(function(item) { return item.title === eventTitle });
        if (user && event) {
            user.saveEvent(event);
        }
        else {
            console.log("BISH I DON'T KNOW HER");
        }
    }

    deleteUser(username) {
        // Deletes a User from the system
        this.users = this.users.filter(function(item) { 
            return item.username !== username
        })
    }
   
    deleteEvent(eventTitle) {
        // Deletes the Event from the system
        this.events = this.events.filter(function(item) {
            return item.title !== eventTitle
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

recommender.addUser("michoooo");
recommender.addUser("gibbyyyy");
recommender.addEvent("Pet lots of kitties", "February 5", "animals");
recommender.saveUserEvent("gibbyyyy", "Pet lots of kitties");
recommender.saveUserEvent("michoooo", "Pet lots of kitties");

console.log(recommender.users);

module.exports = { EventRecommender, User, Event }