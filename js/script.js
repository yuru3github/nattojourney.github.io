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


const mapImage = document.querySelector('.nippon');
if (mapImage) {
    mapImage.addEventListener('load', function () {
        if (typeof ImageMapResize === "function") {
            ImageMapResize();
        }
    });
}


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

    if (result === "aceg") {
        $('#answer_01').show();
    } else if (result === "aceh") {
        $('#answer_02').show();
    } else if (result === "acfg") {
        $('#answer_03').show();
    } else if (result === "acfh") {
        $('#answer_04').show();
    } else if (result === "adeg") {
        $('#answer_05').show();
    } else if (result === "adeh") {
        $('#answer_06').show();
    } else if (result === "adfg") {
        $('#answer_07').show();
    } else if (result === "adfh") {
        $('#answer_08').show();
    } else if (result === "bceg") {
        $('#answer_09').show();
    } else if (result === "bceh") {
        $('#answer_10').show();
    } else if (result === "bcfg") {
        $('#answer_11').show();
    } else if (result === "bcfh") {
        $('#answer_12').show();
    } else if (result === "bdeg") {
        $('#answer_13').show();
    } else if (result === "bdeh") {
        $('#answer_14').show();
    } else if (result === "bdfg") {
        $('#answer_15').show();
    } else if (result === "bdfh") {
        $('#answer_16').show();
    }
});
