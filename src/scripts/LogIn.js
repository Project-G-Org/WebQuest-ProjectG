$(document).ready(function () {

    $("#login-form").submit(function(e){

        e.preventDefault();

        let nme = null;
        let password = null;

        var User = {
            name: $("#user-inpt").val(),
            pass: $("#password-inpt").val(),
        };

        var DBUser = {
            name: ["admin", "Gay1234"],
            pass: ["admin", "gay123"],
        };

        DBUser.name.forEach(e => {
            if (e === User.name) {
                nme = e;
            }
        });

        DBUser.pass.forEach(e => {
            if (e === User.pass) {
                password = e;
            }
        });
        
        if (nme === User.name && password === User.pass) {
            window.location.replace('pages/home.html')
        }
        else{
            alert("Cadástro Não Localizado")
        }

    });

});