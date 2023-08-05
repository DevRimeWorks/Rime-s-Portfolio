const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

var changedPlaceholder = false;


contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var contactButton = document.querySelector(".contact-form button");
    var Loading = document.querySelector(".loadAnim");

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
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            contactButton.style.display = "block";
            Loading.style.display = "none";

            message.classList.add("green-placeholder");
            message.placeholder = "Thanks for reaching out " + name.value + ". I'll get back to you in a couple hours";
            changedPlaceholder = true;

            if (changedPlaceholder) {
                setTimeout(() => {
                    message.classList.remove("green-placeholder");
                    message.placeholder = "Message";
                    changedPlaceholder = false;
                }, 5000);
            }

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
            contactButton.disabled = false;
            name.readOnly = false;
            email.readOnly = false;
            message.readOnly = false;
        }, 6000);
    }

    xhr.send(JSON.stringify(formData));
})