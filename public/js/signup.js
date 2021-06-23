/* JS file handles client side for signing users up  */

// Initializes drop down selection
$(document).ready(function(){
    $('select').formSelect();
});

// Creates new admin account or student account based on user input
$("#signUpBtn").on('click', async (e) => {
    e.preventDefault();
    console.log('button clicked');
    let email = $("#email").val().trim();
    let userName = $("#userName").val().trim();
    let password = $("#password").val().trim();
    let choice = $("#choice option:selected").val();
    let route; 
    let role;
    let pageRedirect;

    if (choice === "1") { // If user is student, this route will be used in the fetch request
        role = 'student'
        route = '/api/student';
        pageRedirect = '/dashboard-student';

    } else if (choice === "2") { // If user is student, this route will be used in the fetch request
        role = 'admin'
        route = '/api/admin';
        pageRedirect = '/dashboard-admin';
    }

    if (email === "" || userName === "" || password === "" || choice === "") {
        alert("All values must be filled in.");
    } else {
        const response = await fetch(route, {
            method: 'POST',
            body: JSON.stringify({
            email,
            userName,
            password,
            role
          }),
          headers: {
            "Content-Type": "application/json"
          }
          });
          if (response.ok) {
            document.location.replace(pageRedirect); // Replace to dash once dash route is completed
          } else {
            alert("Could not create your account. Please try again.");
        } 
    }
})