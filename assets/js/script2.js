function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    let params = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        phone: document.querySelector('input[name="phone"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    emailjs.send("service_6ss8w1m", "template_rap2jtd", params)
        .then(function(response) {
            alert("Email Sent!!");
        }, function(error) {
            alert("Failed to send email. Error: " + error.text);
        });
}
