$(document).ready(function () {
    
    $('#signup-form').submit(function(e){

        e.preventDefault();

        if ($('#user-inpt').val() === "" || $('#password-inpt').val() === ""){

            alert("Por Favor, Preencha os Campos");
        }
        else{

            localStorage.setItem('localUsername', $('#user-inpt').val());
            localStorage.setItem('localPassword', $('#password-inpt').val());

            window.location.replace('../index.html');
        }
    });
});