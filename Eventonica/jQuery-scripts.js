

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

    $()
});