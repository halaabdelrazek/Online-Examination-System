
function validateFName() {
    var inpName = document.getElementById("fname");
    var inpNameValue = inpName.value;
    var spanName = document.getElementById("spanName")
    var inpNameValue = inpName.value;
    var result = validateName(inpNameValue, spanName)
    return result;

}


function validateLName() {
    var inpName = document.getElementById("lname");
    var inpNameValue = inpName.value;
    var spanName = document.getElementById("spanLName")
    var inpNameValue = inpName.value;
    var result = validateName(inpNameValue, spanName)
    return result;
}

function validateName(inpNameValue, spanName) {

    var result = false;
    if (inpNameValue === "") {
        spanName.textContent = "required";
        spanName.style.color = "#fff"
        spanName.style.display = "inline";
    }
    else if (isFinite(inpNameValue)) {
        spanName.textContent = "you must enter string value";
        spanName.style.color = "#fff";
        spanName.style.display = "inline";
    }
    else {
        spanName.textContent = "";
        result = true;
    }
    return result;
}

function validateEmail(this_email) {
    var result = false;
    var emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    var mail = this_email.value;
    var emailSpan = document.getElementById("emailSpan");
    if (this_email.value === "") {
        emailSpan.textContent = "required";
        emailSpan.style.color = "#fff"
        emailSpan.style.display = "inline";
    }
    else if (!emailRegx.test(this_email.value)) {
        emailSpan.textContent = "Email must be #########@#####.com";
        emailSpan.style.color = "#fff";
        emailSpan.style.display = "inline";

    }
    else {
        emailSpan.textContent = "";
        result = true;
    }
    return result;
}

function validatePassword() {

    var result = false;
    var password = document.getElementById("Password")
    var rePassword = document.getElementById("repassword")
    var repasswordSpan = document.getElementById("repasswordSpan");

    if (password.value === rePassword.value && password.value!="" && password.value.length >=8) {
        result = true
        repasswordSpan.textContent = ""

    } else if ( password.value === "" || rePassword.value ==="" || password.value.length <8){

        repasswordSpan.textContent = "password required & length must be more than 8";
        repasswordSpan.style.color = "#fff";
        repasswordSpan.style.display = "inline";

    }
    else if(password.value != rePassword.value && password.value != "" && rePassword.value !="" && password.value.length >=8) {
        repasswordSpan.textContent = "password and repassword not matched";
        repasswordSpan.style.color = "#fff";
        repasswordSpan.style.display = "inline";
    }


    return result;
}

function submit(e) {

    var result = false;
    var emailInput = document.getElementById("email")

    result = validateFName() && validateLName() && validateEmail(emailInput) && validatePassword()
    if (result) {
        getFormValues()
    }

}

function getFormValues(){

    var inpFNameValue = document.getElementById("fname").value;
    var inpLNameValue = document.getElementById("lname").value;
    var emailValue = document.getElementById("email").value;
    var password = document.getElementById("Password").value;

    console.log(inpFNameValue,inpLNameValue,emailValue,password)

    sessionStorage.setItem("fname",inpFNameValue)
    sessionStorage.setItem("lname",inpLNameValue)
    sessionStorage.setItem("Email",emailValue)
    sessionStorage.setItem("password",password)

    location.replace("signin.html")


}