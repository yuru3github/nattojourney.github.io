$(function() {
    if (!localStorage.getItem('visited')) {
        setTimeout(function() {
            $('.start p').fadeIn(1600);
        }, 500);
        setTimeout(function() {
            $('.start').fadeOut(500);
        }, 2500);
        
        localStorage.setItem('visited', 'true');
    }
    else {
        setTimeout(function() {
            $('.start').fadeOut(0);
        }, 0);
    }
});

$('.index .content div').ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.index-show').animate({
            scrollTop: $(hash).offset().top()
        }, 1000);
    }
});

$('.side-nav').ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.index').animate({
            scrollTop: $(hash).offset().top()
        }, 1000);
    }
});

$('.match').ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.index-show').animate({
            scrollTop: $(hash).offset().top()
        }, 1000);
    }
});

$('.matching').ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.matching').animate({
            scrollTop: $(hash).offset().top()
        }, 1000);
    }
});

$(".btn").on("click", function () {
    $(this).closest("div").css("display", "none");
    id = $(this).attr("href");
    $(id).addClass("fit").fadeIn("slow").show();
});

$('.match').ready(function() {
    $('.anim').fadeIn(3000);
});

$('.nippon area').ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.index').animate({
            scrollTop: $(hash).offset().top()
        }, 1000);
    }
});
