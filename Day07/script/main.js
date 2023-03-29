$(document).ready(function () {
    // header pull-down menu event

    $('.outer-menu').hover(function () {
        $(this).find('.inner-menu').css('display', 'block');
    }, function () {
        $(this).find('.inner-menu').css('display', 'none');
    });

    // masonry layout + image load plugin
    $('#main-section').imagesLoaded(function () {
        $('#main-section').masonry({
            itemSelector: '.paper',
            columnWidth: 220,
            isAnimated: true,
        });
    });

    // lightBox
    // lightBox 보이게 하는 함수
    function showLightBox(obj) {

        var img_src = obj.getElementsByTagName('img')[0].src;
        $('#random-image').attr('src', img_src);

        $('#darken-background').show();
        $('#darken-background').css('top', $(window).scrollTop());
        $('body').css('overflow', 'hidden');
    };

    // lightBox 숨기는 함수
    function hideLightBox() {
        $('#darken-background').hide();

        $('body').css('overflow', '');
    }

    $('.paper').click(function () {
        showLightBox(this);
    })

    $('#darken-background').click(function () {
        hideLightBox();
    })

    // click event 하위 객체 전달 금지 -> what?
    $('#lightBox').click(function (event) {
        event.stopPropagation();
    });


})