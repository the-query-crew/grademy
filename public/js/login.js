/* JS file handles client side for logging in admins and students  */ 

const logInStudent = async (e) => {
    e.preventDefault();
    let userName = $("#userName").val().trim();
    let password = $("#password").val().trim();
    if (userName === "" || password === "") {
        alert("All values must be filled in.");
    } else {
        const response = await fetch('/api/student/login', {
            method: 'POST', 
            body: JSON.stringify({
                userName, 
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            document.location.replace('/dashboard-student'); // Replace to dash once dash route is completed
        } else {
            alert("Could not log you in. Please try again.")
        }
    }
}

const logInAdmin = async (e) => {
    e.preventDefault();
    let userName = $("#userName").val().trim();
    let password = $("#password").val().trim();
    if (userName === "" || password === "") {
        alert("All values must be filled in.");
    } else {
        const response = await fetch('/api/admin/login', {
            method: 'POST', 
            body: JSON.stringify({
                userName, 
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            document.location.replace('/dashboard-admin'); // Replace to dash once dash route is completed
        } else {
            alert("Could not log you in. Please try again.")
        }
    }
}

$("#studentBtn").on('click', logInStudent);
$("#adminBtn").on('click', logInAdmin);