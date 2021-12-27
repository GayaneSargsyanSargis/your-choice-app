function validateEmail() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var password = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var validCount = 0;

    password.onfocus = function () {
        document.getElementById("message2").style.display = "block";
    }

    password.onblur = function () {
        document.getElementById("message2").style.display = "none";


        var lowerCaseLetters = /[a-z]/g;
        if (password.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
            validCount++;
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
            validCount--;
        }

        var upperCaseLetters = /[A-Z]/g;
        if (password.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
            validCount++;
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
            validCount--;
        }

        var numbers = /[0-9]/g;
        if (password.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
            validCount++;
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
            validCount--;
        }

        if (password.value.length >= 6 && password.value.length <= 20) {
            length.classList.remove("invalid");
            length.classList.add("valid");
            validCount++;
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
            validCount--;
        }

        if (validCount == 4) {
            document.getElementById("message2").style.display = "none";

        }
    }


    var email = document.getElementById("email").value;
    var text = document.getElementById("text1");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {

        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = "#228B22";
    }
    else {

        text.innerHTML = "Please Enter Valid Email Address.";
        text.style.color = "#FF0000";
    }

    if (email == "") {

        text.innerHTML = "";
    }


    var confirmPassword = document.getElementById("confirmPassword");
    var text2 = document.getElementById("text2");

    if (confirmPassword.value.length != 0) {

        if (confirmPassword.value == password.value) {

            text2.innerHTML = "Password Match.";
            text2.style.color = "#228B22";
        }
        else {
            text2.innerHTML = "Password Don't Match.";
            text2.style.color = "#FF0000";
        }
    }
    else {
        if (password.value.length != 0) {
            text2.innerHTML = "Pleas enter confirm password.";
            text2.style.color = "#FF0000";
        }
        else {
            text2.innerHTML = "";
        }
    }

}

function validAll() {
    var signUp = document.getElementById("signUp");
    signUp.onfocus = function () {
        document.getElementById("message1").style.display = "block";
    }

    signUp.onblur = function () {
        document.getElementById("message1").style.display = "none";
    }
    s
    signUp.addEventListener('click', function () {

        if (email == "" || password == "" || firstName == "" || lastName == "" || confirmPassword == "") {
            signUp.classList.remove("invalid");
            signUp.classList.add("valid");
        }
        else {
            signUp.classList.remove("invalid");
            signUp.classList.remove("valid");
        }
    });
}
