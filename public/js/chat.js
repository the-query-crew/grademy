/* JS file handles client side socket.io  */ 

const socket = io();

let user = $("#user").html().split(" ")[1]; // Gets the user's name from the screen
let role = $("#user").html().split(" ")[3]; // Gets the user's role
console.log(role)

socket.emit('new-user', {user: user, date: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), role: role }); // Sends user name to keep track of in server

socket.on('user-connected', (users) => { // Broadcast that a user joined the chat
    $(".messages").append('<div class="one-message">' + '<p>' + users.user + ' has joined the chat.'  + '</p>' + '<span class="date">' + users.date  + '</span>' + + '</div> + <br>'); 
    autoScroll(); 
})

socket.on('user-left', (users) => { // Broadcast that a user left the chat
    $(".messages").append('<div class="one-message">' + '<p>' + users.user  + ' has left the chat.'  + '</p>' + '<span class="date">' + users.date  + '</span>' + + '</div> + <br>'); 
    $( "#new-users li" ).remove( `:contains(${users.user})`); // Removes the user from list of current users
    autoScroll(); 
})

socket.on('newmsg', (data) => { // Displays new messages with the user, message, and date sent
    $(".messages").append('<div class="one-message">' + '<p>' + data.user + ': '  + data.message  + '</p>' + '<span class="date">' + data.date  + '</span>' + '</div>' + '<br>');
    autoScroll(); 
})

socket.on('current-users', (users) => { // When a user leaves the room or enters, update the current list
    const values = Object.values(users)
    socket.emit('send-current-users', values); // Send to the server current users
})

socket.on('display-current-users', (values) => {
    $("#new-users").empty(); // Empty out all users and append all current ones
    for (let i = 0 ; i < values.length ; i++ ) { // Loop through the object values to display each user's name
        $("#new-users").append('<ul class="green-text">' + '<li>' + '<i class="fas fa-user-circle"></i>' + values[i].user  + ' | '+ values[i].role + '</li>' +  '</ul>')
    }
})

$("#sendBtn").on('click', (e) => { 
    let msg = $("#message").val().trim();
    $("form").trigger("reset"); // Clears the form after message submit
    if (msg.length === 0 ) { // Sends to the server the username, message, and date in hour/minute/am/pm format
        alert('Message must be filled in.');
    } else {
        socket.emit('msg', {message: msg, user: user, date: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) });
        autoScroll(); 
    }
})

const autoScroll = () => { // Auto scrolls to the updated message
    $('.messages').stop().animate({
        scrollTop: $('.messages')[0].scrollHeight 
    });
}



