/* JS file handles client side for logging users out  */

const adminLogOut = async () => {
    const response = await fetch('/api/admin/logout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Failed to log out.");
    }
}

const studentLogOut = async () => {
    const response = await fetch('/api/student/logout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Failed to log out.");
    }
}

$("#logOutAdmin1").on('click', adminLogOut);
$("#logOutAdmin2").on('click', adminLogOut);
$("#logOutStudent1").on('click', studentLogOut);
$("#logOutStudent2").on('click', studentLogOut);