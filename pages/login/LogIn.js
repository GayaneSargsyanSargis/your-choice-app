function validateEmail() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text1");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        text.innerHTML = "Your Email Address in Valid."
        text.style.color = "#228B22";
    }
    else {
        text.innerHTML = "Please Enter Valid Email Address."
        text.style.color = "#FF0000";
    }

    if (email == "") {
        text.innerHTML = ""
    }


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

}
function validAll() {
    var login = document.getElementById("login");

    login.onfocus = function () {
        document.getElementById("message1").style.display = "block";
    }

    login.onblur = function () {
        document.getElementById("message1").style.display = "none";
    }

    login.addEventListener('click', function () {

        if (email.length == 0 || password.length == 0) {
            login.classList.remove("invalid");
            login.classList.add("valid");
        }
        else {
            login.classList.remove("invalid");
            login.classList.remove("valid");
        }
    });

}