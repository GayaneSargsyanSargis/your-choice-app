////window.addEventListener('load', async () => {
////    const token = window.localStorage.getItem('token');
////    if (token) {
////        window.location.href = '/home.html';
////    }
////    document.getElementById('login').addEventListener('click', async () => {
////        const errorLabel = document.getElementById('error-label');
////        errorLabel.innerText = '';
////        const username = document.querySelector('input[name="username"]').value;
////        const password = document.querySelector('input[name="password"]').value;

////        login(username, password).then(response => {
////            if (response.success === true) {
////                window.localStorage.setItem('token', response.data);
////                window.location.href = '/home.html';
////            } else {
////                errorLabel.innerText = response.message;
////            }
////        });
////    });
////});

function validateEmail() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text1");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text.innerHTML = "Your Email Address in Valid."
        text.style.color = "#228B22";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("Invalid");
        text.innerHTML = "Please Enter Valid Email Address."
        text.style.color = "#FF0000";
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("Invalid");
        text.innerHTML = ""
        text.style.color = "##228B22";
    }



    var password = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    password.onfocus = function () {
        document.getElementById("message").style.display = "block";
    }

    password.onblur = function () {
        document.getElementById("message").style.display = "none";
    }

    var lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    var upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (password.value.length >= 6 && password.value.length <= 20) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
    
}
