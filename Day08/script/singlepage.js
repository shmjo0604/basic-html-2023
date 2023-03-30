$(document).ready(function () {
    var navbarShrink = function () {
        const mainNav = $('#mainNav');
        if (!mainNav) {
            return;
        }
        if (window.scrollY === 0) {
            mainNav.removeClass('navbar-shrink');
        }
        else {
            mainNav.addClass('navbar-shrink');
        }
    };

    navbarShrink();
    $(document).scroll(function () {
        navbarShrink();
    });

    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    masthead = $('.masthead').position().top;
    about = $('#about').position().top-250;
    portfolio = $('#portfolio').position().top - 75;
    signup = $("#signup").position().top - 100;

    console.log($('.masthead').position().top);
    console.log($('#about').position().top);
    console.log($('#portfolio').position().top);
    console.log($("#signup").position().top);
    

    $(window).scroll(function() {
        var scroll = $(document).scrollTop();
        console.log(scroll);
        if(scroll < about) {
            $('#menu-about').removeClass('active');
        }
        else if(scroll >= about && scroll < portfolio) {
            $('#menu-about').addClass('active');
            $('#menu-portfolio').removeClass('active');
        }
        else if(scroll >= portfolio && scroll < signup) {
            $('#menu-portfolio').addClass('active');
            $('#menu-signup').removeClass('active');
            $('#menu-about').removeClass('active');
        }
        else if(scroll >= signup) {
            $('#menu-signup').addClass('active');
            $('#menu-portfolio').removeClass('active');
        }   
    });

    // $(window).scroll(function() {
    //     var scroll = $(document).scrollTop();
    //     console.log(scroll);
    //     if(scroll >= 200) {
    //         $("#menu-about").addClass('active');
    //     }
    // });



    const navbarToggler = $('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});