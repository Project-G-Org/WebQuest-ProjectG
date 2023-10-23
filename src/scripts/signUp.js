$(document).ready(function () {
    
    $('#signup-form').submit(function(e){

        e.preventDefault();

        localStorage.setItem('localUsername', $('#user-inpt').val());
        localStorage.setItem('localPassword', $('#password-inpt').val());

        window.location.replace('../index.html');
    });
});