$(function() {
	setTimeout(function(){
		$('.start').fadeIn(1600);
	},500);
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500);
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

$('.match, .card-show').ready(function() {
    $('.anim, .card').fadeIn(3000);
});

$('.nippon area').ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.index').animate({
            scrollTop: $(hash).offset().top()
        }, 1000);
    }
});
