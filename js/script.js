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

$('.btn').on('click', function () {
    $(this).closest("div").css("display", "none");
    id = $(this).attr("href");
    $(id).addClass("fit").fadeIn("slow").show();
});

var box =[];
$('.btn').each(function(){
    $(this).on('click',function(){
        var value = $(this).data("value");
        box.push(value);
    });
});

$('.end').on('click',function(){
    if( box === "aceg" ) {
        $('#answer_01').css("display","");
    } else if ( box === "aceh" ){
        $('#answer_02').css("display","");
    } else if ( box === "acfg" ){
        $('#answer_03').css("display","");
    } else if ( box === "acfh" ){
        $('#answer_04').css("display","");
    } else if ( box === "adeg" ){
        $('#answer_05').css("display","");
    } else if ( box === "adeh" ){
        $('#answer_06').css("display","");
    } else if ( box === "adfg" ){
        $('#answer_07').css("display","");
    } else if ( box === "adfh" ){
        $('#answer_08').css("display","");
    } else if ( box === "bceg" ){
        $('#answer_09').css("display","");
    } else if ( box === "bceh" ){
        $('#answer_10').css("display","");
    } else if ( box === "bcfg" ){
        $('#answer_11').css("display","");
    } else if ( box === "bcfh" ){
        $('#answer_12').css("display","");
    } else if ( box === "bdeg" ){
        $('#answer_13').css("display","");
    } else if ( box === "bdeh" ){
        $('#answer_14').css("display","");
    } else if ( box === "bdfg" ){
        $('#answer_15').css("display","");
    } else ( box === "bdfh" ){
        $('#answer_16').css("display","");
    }
});

$('.nippon area').ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.index').animate({
            scrollTop: $(hash).offset().top()
        }, 1000);
    }
});
