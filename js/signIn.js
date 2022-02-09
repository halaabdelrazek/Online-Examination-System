
var regUsersObject = sessionStorage;


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

function submit() {

    var result = false;
    var emailInput = document.getElementById("email")
    var emailValue = document.getElementById("email").value;
    var password = document.getElementById("Password").value;

    result = validateEmail(emailInput) && checkData(emailValue, password)
    console.log(result)
    if (!result) {
        var correctSpan = document.getElementById("correctSpan")
        correctSpan.textContent = "userEmail or password incorrect";
        correctSpan.style.color = "#fff";
        correctSpan.style.display = "inline";
    } else{
        var correctSpan = document.getElementById("correctSpan")
        correctSpan.textContent = "";

    }

    if(result){
        location.replace("ExamPage.html")
    }

}


function checkData(email, password) {

    var emailFound = false;
    var passwordFound = false;

    var keys = Object.keys(regUsersObject)
    console.log(keys[2])

    for (var i = 0; i < keys.length; i++) {

        if (keys[i] == "Email") {
            if (email == regUsersObject[keys[i]]) {
                emailFound = true;
            }

        }

        if (keys[i] == "password") {
            if (password == regUsersObject[keys[i]]) {
                passwordFound = true;
            }
        }
    }

    result = emailFound && passwordFound;
    return result;


}
