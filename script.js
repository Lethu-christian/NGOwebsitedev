function clearField(field) {
    if (field.value === field.defaultValue) {
        field.value = '';
    }
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Check if critical fields are empty
    if (name === '' || name === 'Your Name' || email === '' || email === 'Your Email') {
        alert('Name and Email are required fields.');
        return false; // Prevent form submission
    }

    // Check if the email is in a valid format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // You can add more validation logic for other fields as needed

    return true; // Allow form submission
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Check if critical fields are empty
    if (name === '' || name === 'Your Name' || email === '' || email === 'Your Email' || phoneNumber === '' || phoneNumber === 'Your Phone Number') {
        alert('Name, Email, and Phone Number are required fields.');
        return false; // Prevent form submission
    }

    // Check if the phone number contains only numbers and is of a specific length
    var phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return false; // Prevent form submission
    }

    // You can add more validation logic for other fields as needed

    return true; // Allow form submission
}

function clearField(field) {
    if (field.value === field.defaultValue) {
        field.value = '';
    }
}

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to set the date in the footer
function setDateInFooter() {
    const footerDate = document.getElementById('footer-date');
    if (footerDate) {
        footerDate.textContent = getCurrentDate();
    }
}

// Call the function when the page is loaded
window.onload = setDateInFooter;