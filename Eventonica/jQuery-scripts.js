

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
    //Adding a user
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
});