document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const getEmail = document.getElementById('user-email');
    const userEmail = getEmail.value;
    // get password email
    const getPassword = document.getElementById('user-password');
    const userPassword = getPassword.value;
    // check email and password
    if (userEmail == "abul@gmail.com" && userPassword == '12345') {
        window.location.href = 'advance_banking.html';
    }
});