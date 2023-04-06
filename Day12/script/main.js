$(window).scroll(function () {

    header = $('#header').offset().top;
    portfolio = $('#portfolio').offset().top-250;
    about = $('#about').offset().top-75;
    contact = $("#contact").offset().top-100;

    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll < portfolio) {
        $('#menu-portfolio').removeClass('active');
    }
    else if (scroll >= portfolio && scroll < about) {
        $('#menu-portfolio').addClass('active');
        $('#menu-about').removeClass('active');
        $('#menu-contact').removeClass('active');
    }
    else if (scroll >= about && scroll < contact) {
        $('#menu-about').addClass('active');
        $('#menu-portfolio').removeClass('active');
        $('#menu-contact').removeClass('active');
    }
    else if (scroll >= contact) {
        $('#menu-contact').addClass('active');
        $('#menu-portfolio').removeClass('active');
        $('#menu-about').removeClass('active');
    }
});