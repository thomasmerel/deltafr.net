const embed = document.getElementById('newsembed');

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

            $('#modal').html(
                "<div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
                "        <div class=\"modal-content\">\n" +
                "            <div class=\"modal-header\">\n" +
                "                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Hey ! Tu as trouvé un bomberman caché !</h5>\n" +
                "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                </button>\n" +
                "            </div>\n" +
                "            <div class=\"modal-body\">\n" +
                "                <div id=\"game\">\n" +
                "                    <canvas id=\"canvas\" width=\"545\" height=\"416\" style=\"margin-left: 45px;\"></canvas>\n" +
                "                </div>\n" +
                "                <h3>Comment jouer</h3>\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col\">\n" +
                "                        <h5>Joueur 1</h5>\n" +
                "                        <ul>\n" +
                "                            <li><strong>Flèches directionnelles</strong> : Se déplacer</li>\n" +
                "                            <li><strong>Espace / Alt</strong> : Placer une bombe</li>\n" +
                "                        </ul>\n" +
                "                    </div>\n" +
                "                    <div class=\"col\">\n" +
                "                        <h4>Joueur 2</h4>\n" +
                "                        <ul>\n" +
                "                            <li><strong>Z, Q, S, D</strong> : Se déplacer</li>\n" +
                "                            <li><strong>shift</strong> : Placer une bombe</li>\n" +
                "                        </ul>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col\">\n" +
                "                        <i><strong>Entrée</strong> : Redémarrer</i><br>\n" +
                "                        <i><strong>Echap</strong> : Menu</i>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"row\">\n" +
                "                    <div class=\"col\">\n" +
                "                        <h6 style=\"line-height: 0.01; margin-top: 40px\">\n" +
                "                            <p class=\"pull-left\">&copy; 2013 Created by <a href=\"http://matousskala.cz\">Matt Skala</a>\n" +
                "                            </p>\n" +
                "                            <p class=\"pull-right\"><a href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\"><img\n" +
                "                                    src=\"http://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png\"\n" +
                "                                    width=\"60\" style=\"margin: -6px 0px;\"></a></p>\n" +
                "                            <p class=\"pull-left credits\">\n" +
                "                                Credits: <a\n" +
                "                                    href=\"http://www.newgrounds.com/art/view/hyptosis/tile-art-batch-1\">Hyptosis</a>, <a\n" +
                "                                    href=\"http://opengameart.org/content/alternate-lpc-character-sprites-george\">George</a>,\n" +
                "                                <a href=\"http://opengameart.org/content/one-more-lpc-alternate-character\">Radomir\n" +
                "                                    Dopieralski</a>, <a\n" +
                "                                    href=\"http://www.flashkit.com/soundfx/Cartoon/Explosions/Explosio-Adrian_G-7936\">Adrian\n" +
                "                                Gallant</a>\n" +
                "                        </h6>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"modal-footer\">\n" +
                "                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>"
            );

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

$('#modal').on('hide.bs.modal', function () {
    $('#modal').html('')
});