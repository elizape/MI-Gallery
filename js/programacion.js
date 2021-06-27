const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('body').addClass('headerDos');
        } else {
            $('body').removeClass('headerDos');
        }
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('body').addClass('removeBar');
    } else {
        $('body').removeClass('removeBar');
    }
});