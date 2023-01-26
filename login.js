function loginvalidate(e) {
    e.preventDefault();

    var formobj = document.getElementById('loginform').elements;

    if (formobj.name.value == '') {
        alert('Please fill the form')
        return false;
    }

    if (!localStorage.getItem('userInfo')) {
        alert('Please Register yourself');
        return false;
    }


    //============= login validation ================   

    let checkData = JSON.parse(localStorage.getItem('userInfo'));
    var ResultOutput = checkData.filter(function (Value) {
        if (Value.email == formobj.emailph.value || Value.number == formobj.emailph.value &&
            Value.newpass == formobj.password.value && Value.secretpin == formobj.secretpin.value)
            return true;

        else return false
    }
    );
    console.log(ResultOutput);

    if (ResultOutput.length == 0) {
        alert('Account not found , Register First')
    }
    else {
        alert('Login Successfully');
        document.getElementById('loginform').reset();
    }

}

// ===============EYE ICON===============================
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