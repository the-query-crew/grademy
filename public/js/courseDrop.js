const courseDropHandler = async (e) => {
    e.preventDefault();

    const courseId = window.location.toString().split('/')[window.location.toString().split('/').length - 1]; // Retrieves the post ID from the window
    console.log(courseId);
    const response = await fetch(`/api/courses/${courseId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard-student');
    } else {
        alert("Could not signup for class");
    }
}

$('#dropCourse').click(courseDropHandler);