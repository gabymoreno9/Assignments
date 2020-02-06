

$(document).ready( () => {
    const eventRecommender = new EventRecommender(); 
    eventRecommender.addUser("Michelle");
    eventRecommender.addUser("Ariel");
    eventRecommender.addUser("Robyn");
    eventRecommender.addUser("Hannah");
    eventRecommender.addUser("Steven");


    for (let i = 0; i < eventRecommender.users.length; i++) {
        let user = eventRecommender.users[i];
        $('#all-users').append('<li>' + user.username + '</li>');
    }
    //Show and Adding a user
    $("#add-user input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let username = $("#add-user input[type='text']").val();
        $("#add-user input[type='text']").val('');
        eventRecommender.addUser(username)
        $('#all-users').append('<li>' + username + '</li>');
    })

    //Deleting a user
    $("#delete-user input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let username = $("#delete-user input[type='text']").val();
        $("#delete-user input[type='text']").val('');
        eventRecommender.deleteUser(username)
        $('#all-users li').each(function(){
            if ($(this).html() === username) {
                $(this).remove();
            }
        });
    })

    //Show, Add Events
    $("#add-event input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let eventName = $("#add-event input[type='text']").val();
        $("#add-event input[type='text']").val('');
        eventRecommender.addUser(eventName)
        $('#all-events').append('<li>' + eventName + '</li>');
    })

     //Deleting an event
     $("#delete-event input[type='submit']").click(function(e) {
        //this is to prevent the page from reloading
        e.preventDefault();
        // so when we click we want it to push the new user onto
        // the users array
        let eventName = $("#delete-event input[type='text']").val();
        $("#delete-event input[type='text']").val('');
        eventRecommender.deleteUser(eventName)


        if ($('#all-events li:contains("' + eventName + '")').length === 0) {
            alert("huh");
        }

        $('#all-events li').each(function(){
            if ($(this).html() === eventName) {
                $(this).remove();
            }
        });
    })



});