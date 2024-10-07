function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;

    if (firstName && lastName && company && email) {
        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, company, email }),
        })
        .then(response => response.text())
        .then(data => {
            nextSlide(); // Move to the thank you slide
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form. Please try again.');
        });
    } else {
        alert('Please fill out all fields before submitting.');
    }
}
