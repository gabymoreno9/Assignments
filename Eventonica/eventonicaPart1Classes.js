class User {
    constructor(username){
        this.username = username;
    }
}

class Event {
    constructor(name){
        this.name = name;
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

    saveUserEvent(){
        // Allow users to save events to a personal Events array.
    }

    deleteUser(user) {
    // Deletes a User from the system
        for()
    }
   
    deleteEvent() {
    // Deletes the Event from the system
    }

    findEventsByDate(){
    // Returns all events on a given date
    }
    
    findEventsbyCategory(){
    // Returns all events in a given category
    }
}