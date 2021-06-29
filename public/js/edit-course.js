async function editCourse (e) {
    e.preventDefault();
    console.log('test');

    let courseName = $("#courseName").val().trim();
    let maxCapacity = $("#maxCapacity").val().trim();
    let courseDescription = $("#courseDescription").val().trim();
    const courseId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    console.log(courseName);
    console.log(maxCapacity);
    console.log(courseDescription);
    console.log(courseId);

    if (courseName === "" || maxCapacity === "" || courseDescription === "") {
        alert("All values must be filled in.");
    } else {
        const response = await fetch('/api/courses/edit/' + `${courseId}` , {
            method: 'PUT',
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
            alert("Not able to edit. Please try again.")
        }
    }
}

$("#updateCourse").on('click', editCourse);