$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 103
    }, 500);

    $('body').scrollspy({
        target: '#navbar'
    });
});

var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
            $('#modal').modal('show');
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});

$('#modal').on('shown.bs.modal', function () {
    gGameEngine.load()
});