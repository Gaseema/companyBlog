$(document).foundation()
$(function () {

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function (e) {
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});
//slider
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);
//ajax
$(function () {
    $('#tabbed-posts .navlinks a').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            return;
        } else {
            var currentitm = $('#tabbed-posts .navlinks a.active').attr('id');
            if (currentitm == 'newpostslink') {
                var currentlist = $('#tabbed-posts-new');
            }
            if (currentitm == 'popularpostslink') {
                var currentlist = $('#tabbed-posts-popular');
            }
            if (currentitm == 'randompostslink') {
                var currentlist = $('#tabbed-posts-random');
            }

            var newitm = $(this).attr('id');
            if (newitm == 'newpostslink') {
                var newlist = $('#tabbed-posts-new');
            }
            if (newitm == 'popularpostslink') {
                var newlist = $('#tabbed-posts-popular');
            }
            if (newitm == 'randompostslink') {
                var newlist = $('#tabbed-posts-random');
            }

            $('#tabbed-posts .navlinks a').removeClass('active');
            $(this).addClass('active');

            $(currentlist).fadeOut(320, function () {
                $(newlist).fadeIn(200);
            });
        } // end if/else logic

    }); // end event handler
});
//header transition
$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".nav").css("background-color", "#494B55"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".nav").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
});
//header transition
$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".nav").css("background-color", "#ffffff"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".nav").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
});
$(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
        $('.nav').css({
            'box-shadow': 'none',
            '-moz-box-shadow': 'none',
            '-webkit-box-shadow': 'none'
        });
    } else {
        $('.nav').css({
            'box-shadow': '0px 5px 20px rgba(141, 141, 141, 0.68)',
            '-moz-box-shadow': '0px 5px 20px rgba(141, 141, 141, 0.68)',
            '-webkit-box-shadow': '0px 5px 20px rgba(141, 141, 141, 0.68)'
        });
    }
});
//header transition
$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".switch").css("color", "black"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".switch").css("color", "white"); // if not, change it back to transparent
        }
    });
});
