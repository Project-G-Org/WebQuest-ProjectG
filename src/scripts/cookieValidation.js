$(document).ready(function () {

    function getCookie(name) {
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
        return match ? match[1] : null;
    }

    if (getCookie('username') == null || getCookie('userpassword') == null){
        window.location.replace('../index.html');
    }

    setInterval(function (){

        if (getCookie('username') == null || getCookie('userpassword') == null){
            window.location.replace('../index.html');
        }

    }, 15000);

});