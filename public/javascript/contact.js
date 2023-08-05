const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

var changedPlaceholder = false;


contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var contactButton = document.querySelector(".contact-form button");
    var Loading = document.querySelector(".loadAnim");
    var thanksMessage = document.querySelector(".thanks");

    contactButton.disabled = true;
    name.readOnly = true;
    email.readOnly = true;
    message.readOnly = true;
    contactButton.style.display = "none";
    Loading.style.display = "block"; 
    
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        if (xhr.responseText == 'success') {
            Loading.style.display = "none";
            thanksMessage.innerHTML = "Thanks for reaching out " + name.value + ". I'll get back to you in an hour.";

            name.value = "";
            email.value = "";
            message.value = "";
        }
        else {
            alert("Something went wrong");

            name.value = "";
            email.value = "";
            message.value = "";
        }

        setTimeout(() => {
            thanksMessage.innerHTML = "";
            contactButton.style.display = "block";
            contactButton.disabled = false;
            name.readOnly = false;
            email.readOnly = false;
            message.readOnly = false;
        }, 6000);
    }

    xhr.send(JSON.stringify(formData));
})