/* JS file handles client side socket.io  */ 

const socket = io();

$("#sendBtn").on('click', (e) => { 
    let msg = $("#message").val();
    $("form").trigger("reset"); // Clears the form after message submit

    if (msg) {
        socket.emit('msg', {message: msg});
    }
})

socket.on('newmsg', (data) => { // Hard coded values for now
    $(".messages").append('<div class="one-message">' + '<p>' + 'Example User' + ': '  + data.message  + '</p>' + '<span class="date">' + '8:00 AM'  + '</span>' + '</div>')
})