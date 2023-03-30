$(document).ready(function() {
    $('#home').addClass('active');

    // navigation a 태그 마우스 클릭 이벤트
    $('.navigation > a').click(function () {
        $('a').removeClass('active');
        $(this).addClass('active');
    });
});

// $(window).resize(function() {
//     var image = document.getElementById('hill1');
//     console.log(image.width + 'x' + image.height);

//     $('.contents').css({
//         'position' : 'absolute',
//         'top' : image.height + 'px'
//     });
// })

$(window).scroll(function () {
    let value = window.scrollY;
    $('#text').css('margin-top', value * 2.0 + 'px');
    $('#leaf').css({
        'top': value * -0.3 + 'px',
        'left': value * 0.9 + 'px'
    });
    $('#hill5').css({
        'top':value * 0.5 + 'px',
        'left':value * 1.2 + 'px'
    })
    $('#hill4').css({
        'top':value * 0.5 + 'px',
        'left':value * -1.2 + 'px'
    })
    $('#hill3').css({
        'top': value * 0.5 + 'px',
    })
    $('#hill2').css({
        'top':value * 0.3 + 'px',
    })
    $('#hill1').css({
        'top':value * 0.2 + 'px'
    })
    $('#plant').css({
        'top':value * 0.3 + 'px',
        'left':value * -0.9 + 'px'
    })
});
