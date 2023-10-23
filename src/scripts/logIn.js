$(document).ready(function () {
    
    sessionStorage.clear();

    $("#login-form").submit(function(e){

        e.preventDefault();

        let nme = null;
        let password = null;
        let nmeIndex = null;
        let passwordIndex = null;

        var User = {
            name: $("#user-inpt").val(),
            pass: $("#password-inpt").val(),
        };

        var DBUser = {
            name: ["admin", "usuario1234"],
            pass: ["admin", "usuario123"],
        };

        DBUser.name.forEach((e, i) => {
            if (e === User.name) {
                nme = e;
                nmeIndex = i;
            }
        });

        if(User.name === localStorage.getItem('localUsername')){

            nme = localStorage.getItem('localUsername');

        };

        DBUser.pass.forEach((e, i) => {
            if (e === User.pass) {
                password = e;
                passwordIndex = i;
            }
        });

        if (User.pass === localStorage.getItem('localPassword')){

            password = localStorage.getItem('localPassword');

        };
        
        if (nme === User.name && password === User.pass && passwordIndex === nmeIndex) {
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
