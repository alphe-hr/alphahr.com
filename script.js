// ===============================
// MOBILE MENU
// ===============================

function toggleMenu(){

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking

document.querySelectorAll("#navMenu a").forEach(function(link){

    link.addEventListener("click", function(){

        document.getElementById("navMenu").classList.remove("active");

    });

});


// ===============================
// APPLICATION MODAL
// ===============================

function openApply(product){

    const modal = document.getElementById("applyModal");

    const productInput =
        document.getElementById("selectedProduct");

    productInput.value = product;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeApply(){

    document.getElementById("applyModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}


// Close modal when clicking outside

document.getElementById("applyModal")
    .addEventListener("click", function(e){

        if(e.target === this){

            closeApply();

        }

    });


// ===============================
// APPLICATION
// ===============================

let applicationData = {};


function submitApplication(event){

    event.preventDefault();


    applicationData = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        district:
            document.getElementById("district").value,

        product:
            document.getElementById("selectedProduct").value,

        message:
            document.getElementById("message").value

    };


    closeApply();

    document.getElementById("successModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";

}


// ===============================
// OPEN EMAIL
// ===============================

function sendEmail(){

    /*
    CHANGE THIS EMAIL
    TO YOUR REAL UDDOKTAHON EMAIL
    */

    const receiver =
        "YOUR-EMAIL@gmail.com";


    const subject =
        "New UddoktaHon Application - " +
        applicationData.product;


    const body =
`UDDOKTAHON APPLICATION

Name:
${applicationData.name}

Email:
${applicationData.email}

Phone:
${applicationData.phone}

District:
${applicationData.district}

Product:
${applicationData.product}

Why do you want to join?
${applicationData.message}
`;


    const gmailURL =
        "https://mail.google.com/mail/?view=cm" +
        "&fs=1" +
        "&to=" + encodeURIComponent(receiver) +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);


    window.open(gmailURL, "_blank");

}


function closeSuccess(){

    document.getElementById("successModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}


// ===============================
// FAQ
// ===============================

function toggleFAQ(button){

    const item = button.parentElement;

    item.classList.toggle("open");


    const icon = button.querySelector("span");

    if(item.classList.contains("open")){

        icon.textContent = "−";

    }else{

        icon.textContent = "+";

    }

}


// ===============================
// CLOSE SUCCESS MODAL OUTSIDE
// ===============================

document.getElementById("successModal")
    .addEventListener("click", function(e){

        if(e.target === this){

            closeSuccess();

        }

    });
