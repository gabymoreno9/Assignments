const API_KEY = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0"


function renderUsers(userArray) {
    $('#all-users').html('');
    for (let i = 0; i < userArray.length; i++) {
        let user = userArray[i];
        let events = ''
        if (user.savedEvents.length > 0) {
            events = '  |   Attending: ' + user.savedEvents.join(', ');
        }
        $('#all-users').append('<li>' + user.username + events + '</li>');
    }
}

function renderEvents(eventsArray) {
    $('#all-events').html('');
    for (let i = 0; i < eventsArray.length; i++) {
        let event = eventsArray[i];
        $('#all-events').append('<li>' + event.title + '  |  ' + event.date + '  |  ' + event.category + '</li>');
    }
}

function post(data) {
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    return options;
}


$(document).ready(function() {
    //when we load the pa\ge we need to fetch /user and /events from the
    //eventonica server

    fetch("http://localhost:8888/users")
        .then(function(response) {
            response.json().then(function(response){
                renderUsers(response);
            })
        })

    fetch("http://localhost:8888/events")
        .then(function(response) {
            response.json().then(function(response){
                renderEvents(response);
            })
        })

    // fetch("https://app.ticketmaster.com/discovery/v2/events.json?&apikey=" + API_KEY)
    //     .then(function(response) {
    //         response.json().then(function(response) {
    //             let events = response._embedded.events;
    //             for (let event of events) {
    //                 let date = event.dates.start.localDate
    //                 let category = event.classifications[0].segment.name
    //                 eventRecommender.addEvent(event.name, date, category);
    //                 $('#all-events').append('<li>' + event.name + '  |  ' + date + '  |  ' + category + '</li>');
    //             }
    //         });
    //     });

    //Show and Adding a user
    //try to implement .submit instead of the .click mess
    $("#add-user input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let username = $("#add-user input[type='text']").val();
        $("#add-user input[type='text']").val('');

        fetch("http://localhost:8888/add-user", post({ username }))
            .then(function(response) {
                response.json().then(function(response){
                    renderUsers(response);
                })
            })
    })

    //Deleting a user
    $("#delete-user input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let username = $("#delete-user input[type='text']").val();
        $("#delete-user input[type='text']").val('');
        
        fetch("http://localhost:8888/delete-user", post({ username }))
            .then(function(response) {
                response.json().then(function(response){
                    renderUsers(response);
                })
            })
    })

    //Show, Add Events
    $("#add-event input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let title = $("#add-event #add-event-name").val();
        let date = $("#add-event #add-event-date").val();
        let category = $("#add-event #add-event-category").val();
        $("#add-event input[type='text']").val('');
        
        fetch("http://localhost:8888/add-event", post({ title, date, category }))
            .then(function(response) {
                response.json().then(function(response){
                    renderEvents(response);
                })
            })
    })

     //Deleting an event
     $("#delete-event input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let eventTitle = $("#delete-event input[type='text']").val();
        $("#delete-event input[type='text']").val('');


        fetch("http://localhost:8888/delete-event", post({ eventTitle }))
            .then(function(response) {
                response.json().then(function(response){
                    renderEvents(response);
                })
            })
    });

    // Search for events by date
    $("#date-search input[type='submit']").click(function(e) {
        e.preventDefault();
        let date = $("#date-search input[type='text']").val();
        fetch("http://localhost:8888/events-by-date?date=" + date)
            .then(function(response) {
                response.json().then(function(response){
                    // Reset the results area so it doesn't keep adding more lines every time you click the button
                    $("#date-search h4").html("Results:");
                    for (let i = 0; i < response.length; i++) {
                        $("#date-search h4").append('<li>' + response[i].title + '</li>');
                    }
                })
            })
    });

    //search by category
    $("#category-search input[type='submit']").click(function(e) {
        e.preventDefault();
        let category = $("#category-search input[type='text']").val();
        fetch("http://localhost:8888/events-by-category?category=" + category)
            .then(function(response) {
                response.json().then(function(response){
                    // Reset the results area so it doesn't keep adding more lines every time you click the button
                        $("#category-search h4").html("Results:");
                        for (let i = 0; i < response.length; i++) {
                            $("#category-search h4").append('<li>' + response[i].title + '</li>');
                        }
                })
            })
    });

     //Saving event for user
     $("#save-user-event input[type='submit']").click(function(e) {
        e.preventDefault();
   
        let username = $("#save-user-event #save-user-id").val();
        let eventTitle = $("#save-user-event #save-event-id").val();

        fetch("http://localhost:8888/save-user-event", post({ username, eventTitle }))
            .then(function(response) {
                response.json().then(function(response){
                    renderUsers(response);
                })
            })

        $("#save-user-event input[type='text']").val('');

        
    })
});