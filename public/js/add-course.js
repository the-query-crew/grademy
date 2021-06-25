
async function submitCourse (e) {
    e.preventDefault();
    console.log('test');

    let courseName = $("#courseName").val().trim();
    let maxCapacity = $("#maxCapacity").val().trim();
    let courseDescription = $("#courseDescription").val().trim();
    console.log(courseName);
    console.log(maxCapacity);
    console.log(courseDescription);

    if (courseName === "" || maxCapacity === "" || courseDescription === "") {
        alert("All values must be filled in.");
    } else {
        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify({
                courseName,
                maxCapacity,
                courseDescription,
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

$("#submitCourse").on('click', submitCourse);