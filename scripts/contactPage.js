//Contact Page JavaScript

//Form Validation
function validate()
{
    var form = document.querySelector("#contactForm");
    form.addEventListener("submit", contactValidate);
}

function contactValidate()
{
    var myForm = document.querySelector("#contactForm");
    
    if (myForm.firstName.value == "")
        {
            formValid = false;
            document.querySelector("#errFirstNameRequired").style.display = "block";
            document.querySelector("#cross1").style.display = "inline";
            document.querySelector("#tick1").style.display = "none";
            document.querySelector("#phoneNumber").style.marginRight = "20px";
            event.preventDefault();
        }
    
    else
        {
            document.querySelector("#errFirstNameRequired").style.display = "none";
            document.querySelector("#tick1").style.display = "inline";
            document.querySelector("#cross1").style.display = "none";
        }
    
    if (myForm.lastName.value == "")
        {
            formValid = false;
            document.querySelector("#errLastNameRequired").style.display = "block";
            document.querySelector("#cross2").style.display = "inline";
            document.querySelector("#tick2").style.display = "none";
            event.preventDefault();
        }
    
    else
        {
            document.querySelector("#errLastNameRequired").style.display = "none";
            document.querySelector("#tick2").style.display = "inline";
            document.querySelector("#cross2").style.display = "none";
        }
    
    if (myForm.email.value == "")
        {
            formValid = false;
            document.querySelector("#errEmailRequired").style.display = "block";
            document.querySelector("#cross3").style.display = "inline";
            document.querySelector("#tick3").style.display = "none";
            event.preventDefault();
        }
    
    else
        {
            document.querySelector("#errEmailRequired").style.display = "none";
            document.querySelector("#tick3").style.display = "inline";
            document.querySelector("#cross3").style.display = "none";
        }
    
    if (myForm.message.value == "")
        {
            formValid = false;
            document.querySelector("#errMessageRequired").style.display = "block";
            document.querySelector("#cross4").style.display = "inline";
            document.querySelector("#tick4").style.display = "none";
            event.preventDefault();
        }
    
    else
        {
            document.querySelector("#errMessageRequired").style.display = "none";
            document.querySelector("#tick4").style.display = "inline";
            document.querySelector("#cross4").style.display = "none";
        }
}
//END