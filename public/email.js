function submitForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();

    if (firstName && lastName && company && email) {
        // Disable the submit button to prevent multiple submissions
        document.querySelector('button[type="button"]').disabled = true;

        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, company, email }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
            nextSlide(); // Move to the thank you slide
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form. Please try again.');
        })
        .finally(() => {
            // Re-enable the submit button
            document.querySelector('button[type="button"]').disabled = false;
        });
    } else {
        alert('Please fill out all fields before submitting.');
    }
}
