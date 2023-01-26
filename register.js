function validateform(e) {
    e.preventDefault();
    console.log(e);
    //name validation
    if (e.target.number.value.includes(" ") || !e.target.name.value) {
        alert("Enter Your Name")
        return false
    }
    //number validation
    if (isNaN(e.target.number.value)) {
        alert("Please use only Numeric value");
        return false;
    }
    if (e.target.number.value == "") {
        alert("Mobile number can't be empty");
        return false;
    }
    if (e.target.number.value.length < 10) {
        alert("Please Enter a valid Number");
        return false;
    }
    //  Email validation
    if (!e.target.email.value.includes('@')) {
        alert("Please Enter a valid Email");
        return false;
    }
    if (!e.target.email.value.includes('.')) {
        alert("Please Enter a valid Email");
        return false;
    }
    //password validation
    if (e.target.newpass.value.length < 8) {
        alert("Password length should be minimum 8 character");
        return false;
    }

    handleSubmit(e)
    // getinfo(e)
}


let arr = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    let userInfo = {};
    for (let index = 0; index < e.target.length - 2; index++) {
        const element = e.target[index].value;
        console.log(e.target[index]);
        userInfo = {
            ...userInfo,
            [e.target[index].name]: element
        };
    }
    arr.push(userInfo);
    const data = JSON.stringify(arr);
    console.log(data);
    localStorage.setItem("userInfo", data);
}

function captcha(size, isSpecialCharacter, isNumber) {
    var special = '!@#$%^&*()';
    var string = "";
    var number = '0123456789';

    if (isSpecialCharacter) {
        string += special;
    }
    if (isNumber) {
        string += number;
    }

    var result = "";
    for (var i = 0; i < size; i++) {
        var index = parseInt(Math.random() * string.length);
        result += string[index];

    }
    return (result);

}

function CaptchaShow(e) {
    e.preventDefault();
    alert('Don not forget to store Security Pin')
    document.getElementById('secretpin').value = captcha(5, true, true);
    return;

}


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#newpass');
const secretpin = document.querySelector('#secretpin');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
const togglePin = document.querySelector('#togglePin');
togglePin.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = secretpin.getAttribute('type') === 'password' ? 'text' : 'password';
    secretpin.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});