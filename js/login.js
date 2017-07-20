var auth;
var authorized = false;
$(function () {
    VK.init({
        apiId: 4004433
    });
    $('.button').click(function () {
        if (authorized == false) {
            VK.Auth.login(function (a) {
                if (a.session) {
                    auth = a.session;
                    $.post('//fandance.ru/music/events.php?do=login', {
                            id: auth.mid,
                            name: auth.user.first_name,
                            last: auth.user.last_name,
                            href: auth.user.href
                        },
                        function (data) {
                            if (data.length > 0) {
                                alert(data[0]);
                            } else {
                                check_login();
                            }
                        }, "json");
                    //alert('Добро Пожаловать, ' + auth.user.first_name);
                    location.href = 'lk/';

                } else {
                    alert('К сожалению, вы не смогли авторизоваться. Пожалуйста, повторите попытку ещё раз.');
                }
                //console.log(auth);

            });
        } else {
            location.href = 'lk/';
        }




    });
    check_login();

    $('#logout').click(function () {
        $.getJSON('//fandance.ru/music/events.php?do=logout', function (json) {
            alert(json.mes);
            location.reload();
        });
    });
});

function check_login() {
    $.getJSON('//fandance.ru/music/events.php?do=check_login', function (json) {
        if (json.loginned) {
            authorized = true;
            $('.button').text('Продолжить');
        } else {
            authorized = false;
        }
    });
}
