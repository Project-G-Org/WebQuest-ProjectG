$(document).ready(function () {
    
    sessionStorage.clear();

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

        if(User.name === localStorage.getItem('localUsername')){

            nme = localStorage.getItem('localUsername');

        };

        DBUser.pass.forEach(e => {
            if (e === User.pass) {
                password = e;
            }
        });

        if (User.pass === localStorage.getItem('localPassword')){

            password = localStorage.getItem('localPassword');

        };
        
        if (nme === User.name && password === User.pass || nme === User.name && password === User.pass) {
            window.location.replace('pages/home.html');
            // document.cookie = "username="+User.name+";Max-age=2100";
            sessionStorage.setItem("userName", User.name);
        }
        else{
            alert("Cadástro Não Localizado");
            window.location.replace('pages/signUp.html');
        }

    });

});