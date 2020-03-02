const postgres = require('pg')
const pool = new postgres.Pool({
  user: 'gabbymoreno',
  host: 'localhost',
  database: 'eventonica',
  password: '',
  port: 5432,
})


function getPostgresData(query, params) {
    return new Promise(function(resolve, reject) {
        pool.query(query, params, (error, results) => {
            if (error) { 
                console.log(error)
                reject(error); 
            }
            else {
                resolve(results.rows);
            }
        })
    })
}


class EventRecommender {
    getUsers() {
        let query = `
            SELECT users.id, users.username, events.title FROM users
            LEFT JOIN saved_user_events ON saved_user_events.user_id = users.id
            LEFT JOIN events ON events.id = saved_user_events.event_id
            ORDER BY users.id ASC`
        return getPostgresData(query).then(result => {
            let users = {}
            for (let row of result) {
                if (row.username in users) {
                    users[row.username].savedEvents.push(row.title)
                }
                else {
                    let savedEvents = [];
                    if (row.title) {
                        savedEvents = [row.title];
                    }
                    users[row.username] = { id: row.id, username: row.username, savedEvents }
                }
            }
            return Object.values(users);
        });
    }
    getEvents() {
        return getPostgresData('SELECT * FROM events ORDER BY id ASC');
    }

    addEvent(title, date, category) {
        // Adds a new Event to the System
        return getPostgresData('INSERT INTO events (title, date, category) VALUES ($1, $2, $3)', [title, date, category])
    }

    addUser(username) {
        // Adds a new User to the System
        return getPostgresData('INSERT INTO users (username) VALUES ($1)', [username])
    }

    saveUserEvent(username, eventTitle) {
        return getPostgresData('SELECT * FROM users WHERE username = $1', [username])
            .then(users => getPostgresData('SELECT * FROM events WHERE title = $1', [eventTitle])
                .then(events => {
                    if (users.length === 1 && events.length === 1) {
                        return getPostgresData('INSERT INTO saved_user_events (user_id, event_id) VALUES ($1, $2)', [users[0].id, events[0].id])
                    }
                    else {
                        console.log("User or event does not exist")
                    }
                }))
    }

    deleteUser(username) {
        // Deletes a User from the system
        return getPostgresData('DELETE FROM users WHERE username = $1', [username])
    }
   
    deleteEvent(eventTitle) {
        // Deletes the Event from the system
        return getPostgresData('DELETE FROM events WHERE title = $1', [eventTitle])
    }

    findEventsByDate(date){
        // Returns all events on a given date 
        return getPostgresData('SELECT * FROM events WHERE date = $1', [date])
    }
    
    
    findEventsByCategory(category){
        // Returns all events in a given category
        return getPostgresData('SELECT * FROM events WHERE category = $1', [category])
    }
}


module.exports = { EventRecommender }
