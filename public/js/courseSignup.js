const courseSignupHandler = async (e) => {
    e.preventDefault();

    let courseId = e.target.getAttribute('courseId');
    console.log(courseId);
    const response = await fetch('/api/courses/signup', {
        method: 'POST',
        body: JSON.stringify({courseId}),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard-student');
    } else {
        alert("Could not signup for class");
    }
}

$('button').click(courseSignupHandler);