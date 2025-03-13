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
                scrollTop: target.offset().top - 100
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

$('.end').click(function () {
    let result = box.join('');
    let answerId = '';

    if (result === "aceg") {
        answerId = '#answer_01';
    } else if (result === "aceh") {
        answerId = '#answer_02';
    } else if (result === "acfg") {
        answerId = '#answer_03';
    } else if (result === "acfh") {
        answerId = '#answer_04';
    } else if (result === "adeg") {
        answerId = '#answer_05';
    } else if (result === "adeh") {
        answerId = '#answer_06';
    } else if (result === "adfg") {
        answerId = '#answer_07';
    } else if (result === "adfh") {
        answerId = '#answer_08';
    } else if (result === "bceg") {
        answerId = '#answer_09';
    } else if (result === "bceh") {
        answerId = '#answer_10';
    } else if (result === "bcfg") {
        answerId = '#answer_11';
    } else if (result === "bcfh") {
        answerId = '#answer_12';
    } else if (result === "bdeg") {
        answerId = '#answer_13';
    } else if (result === "bdeh") {
        answerId = '#answer_14';
    } else if (result === "bdfg") {
        answerId = '#answer_15';
    } else if (result === "bdfh") {
        answerId = '#answer_16';
    }

    if (answerId) {
        const answerElement = $(answerId);
        const animElement = answerElement.find('.anim');

        answerElement.css({ display: 'block' });
        animElement.addClass('rotate');
    }
});


