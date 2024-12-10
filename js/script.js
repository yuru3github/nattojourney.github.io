document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    el.style.opacity = "1";
    el.style.animation = "fadeIn 4s ease-out";
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const mapImage = document.querySelector('.nippon');
    if (mapImage.complete) {
        ImageMapResize();
    } else {
        mapImage.addEventListener('load', ImageMapResize);
    }
});


$(document).ready(function () {
    var hash = window.location.hash;
    if (hash) {
        var target = $(hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    }
});


let box = [];

$('.btn').click(function(event) {
    event.preventDefault();

    $(this).closest('div').hide();

    let value = $(this).data('value');
    box.push(value);

    let id = $(this).attr('href');
    $(id).fadeIn();
});

$('.end').click(function() {
    let result = box.join('');

  　document.addEventListener("DOMContentLoaded", function () {
  　　const animElements = document.querySelectorAll('.anim');

     animElements.forEach(el => {
   　 　el.style.opacity = "1";
    　　el.classList.add('spin-in');
  　　});
　　});
  
    if (result === "aceg") {
        let el = $('#answer_01 .anim');
        resetAnimation(el);
        $('#answer_01').show();
    } else if (result === "aceh") {
        let el = $('#answer_02 .anim');
        resetAnimation(el);
        $('#answer_02').show();
    } else if (result === "acfg") {
        let el = $('#answer_03 .anim');
        resetAnimation(el);
        $('#answer_03').show();
    } else if (result === "acfh") {
        let el = $('#answer_04 .anim');
        resetAnimation(el);
        $('#answer_04').show();
    } else if (result === "adeg") {
        let el = $('#answer_05 .anim');
        resetAnimation(el);
        $('#answer_05').show();
    } else if (result === "adeh") {
        let el = $('#answer_06 .anim');
        resetAnimation(el);
        $('#answer_06').show();
    } else if (result === "adfg") {
        let el = $('#answer_07 .anim');
        resetAnimation(el);
        $('#answer_07').show();
    } else if (result === "adfh") {
        let el = $('#answer_08 .anim');
        resetAnimation(el);
        $('#answer_08').show();
    } else if (result === "bceg") {
        let el = $('#answer_09 .anim');
        resetAnimation(el);
        $('#answer_09').show();
    } else if (result === "bceh") {
        let el = $('#answer_10 .anim');
        resetAnimation(el);
        $('#answer_10').show();
    } else if (result === "bcfg") {
        let el = $('#answer_11 .anim');
        resetAnimation(el);
        $('#answer_11').show();
    } else if (result === "bcfh") {
        let el = $('#answer_12 .anim');
        resetAnimation(el);
        $('#answer_12').show();
    } else if (result === "bdeg") {
        let el = $('#answer_13 .anim');
        resetAnimation(el);
        $('#answer_13').show();
    } else if (result === "bdeh") {
        let el = $('#answer_14 .anim');
        resetAnimation(el);
        $('#answer_14').show();
    } else if (result === "bdfg") {
        let el = $('#answer_15 .anim');
        resetAnimation(el);
        $('#answer_15').show();
    } else if (result === "bdfh") {
        let el = $('#answer_16 .anim');
        resetAnimation(el);
        $('#answer_16').show();
    }
});

