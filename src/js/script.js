var leaders = [
    ['Eagle', 'src/img/deltas/eagle.jpg', '', 'https://steamcommunity.com/profiles/76561197970728039', ''],
    ['Raptor', 'src/img/deltas/raptor.png', '', 'https://steamcommunity.com/profiles/76561197961915318', ''],
    ['Warthog', 'src/img/deltas/warthog.jpg', '', 'https://steamcommunity.com/profiles/76561198066334393', ''],
];

var members = [
    ['Alcyon', 'src/img/deltas/avatar.jpg', '', 'https://steamcommunity.com/profiles/76561198010847814', ''],
    ['Ant', 'src/img/deltas/ant.jpg', '', 'https://steamcommunity.com/id/Tuponia', 'https://www.twitch.tv/deltafrant'],
    ['Bear', 'src/img/deltas/bear.jpg', '25 ans', 'https://steamcommunity.com/profiles/76561198008978169', 'https://www.twitch.tv/thenossy'],
    ['Blackbird', 'src/img/deltas/blackbird.jpg', '', 'https://steamcommunity.com/profiles/76561198053539965', ''],
    ['Cheetah', 'src/img/deltas/cheetah.png', '', '', ''],
    ['Coyote', 'src/img/deltas/avatar.jpg', '', '', ''],
    ['Crow', 'src/img/deltas/avatar.jpg', '', 'https://steamcommunity.com/profiles/76561198029587542', ''],
    ['Dogg', 'src/img/deltas/dogg.jpg', '', 'https://steamcommunity.com/profiles/76561197985342238', ''],
    ['Fennec', 'src/img/deltas/fennec.png', '21 ans', 'https://steamcommunity.com/profiles/76561198039833419/', 'https://www.twitch.tv/mr_lo0ky'],
    ['Gerfaut', 'src/img/deltas/gerfaut.jpg', '', 'https://steamcommunity.com/profiles/76561198011076482', ''],
    ['Guanaco', 'src/img/deltas/guanaco.jpg', '', 'https://steamcommunity.com/profiles/76561198021452134', ''],
    ['Gorilla', 'src/img/deltas/gorilla.png', '', 'https://steamcommunity.com/profiles/76561193787144601', ''],
    ['Harfang', 'src/img/deltas/harfang.jpg', '', 'https://steamcommunity.com/profiles/76561198105484872', ''],
    ['Ikran', 'src/img/deltas/ikran.png', '26 ans', 'https://steamcommunity.com/id/Ciiz79', ''],
    ['Licorne', 'src/img/deltas/avatar.jpg', '', '', ''],
    ['Octopus', 'src/img/deltas/octopus.jpg', '31 ans', 'https://steamcommunity.com/profiles/76561198016252308/', ''],
    ['Panda', 'src/img/deltas/avatar.jpg', '', '', ''],
    ['Redbull', 'src/img/deltas/redbull.png', '', 'https://steamcommunity.com/id/deltafr_redbull', ''],
    ['Scarabe', 'src/img/deltas/scarabe.png', '', 'https://steamcommunity.com/profiles/76561198030682725', ''],
    ['Shark', 'src/img/deltas/avatar.jpg', '', '', ''],
    ['Stoat', 'src/img/deltas/stoat.png', '', '', ''],
    ['Tiger', 'src/img/deltas/tiger.png', '', '', ''],
    ['Vulture', 'src/img/deltas/vulture.png', '24 ans', 'https://steamcommunity.com/id/Vulture__/', 'https://www.twitch.tv/vulture____'],
    ['Walrus', 'src/img/deltas/walrus.jpg', '', 'https://steamcommunity.com/profiles/76561198002184444', '']
];

$(document).ready(function () {
    fillLeaders();
    fillMembers();
});

function fillLeaders(){
    var html = '';
    var nbitems = 3;

    for(var row = 0; row < leaders.length; row += nbitems)
    {
        html +='<div class="row text-center justify-content-center">\n'; // open div.row
        for(var i = row; i < (row + nbitems); i++)
        {
            if(typeof members[i] !== "undefined") {
                html += '<div class="col">\n';
                html += '<div class="card hovercard">\n';
                html += '<div class="cardheader"></div>\n';
                html += '<div class="avatar">\n';
                html += '<img alt="" src="' + leaders[i][1] + '">\n';
                html += '</div>\n';
                html += '<div class="info">\n';
                html += '<div class="info-title">\n';
                html += leaders[i][0] + '\n';
                html += '</div>\n';
                if (leaders[i][2] === '') {
                    html += '<div class="info-desc"><br/></div>\n';
                } else {
                    html += '<div class="info-desc">' + leaders[i][2] + '</div>\n';
                }
                html += '<div class="info-desc">\n';
                if (leaders[i][3] === '') {
                    html += '<div style="height: 34px"></div>\n';
                } else {
                    html += '<a href="' + leaders[i][3] + '">\n';
                    html += '<i class="fab fa-steam-symbol"></i>\n';
                    html += '</a>\n';
                }

                if (leaders[i][4] !== '') {
                    html += '<a target="_blank" href="'+ leaders[i][4] +'">\n';
                    html += '<i class="fab fa-twitch"></i>\n';
                    html += '</a>\n';
                }
                html += '</div>\n';
                html += '</div>\n';
                html += '</div>\n';
                html += '</div>\n';
            }
        }
        html += '</div>\n'; // close div.row
    }

    $('#leaders').html(html);
}

function fillMembers(){
    var html = '';
    var nbitems = 3;

    for(var row = 0; row < members.length; row += nbitems)
    {
        html +='<div class="row text-center justify-content-center">\n'; // open div.row
        for(var i = row; i < (row + nbitems); i++)
        {
            if(typeof members[i] !== "undefined") {
                html += '<div class="col">\n';
                html += '<div class="card hovercard">\n';
                html += '<div class="cardheader"></div>\n';
                html += '<div class="avatar">\n';
                html += '<img alt="" src="' + members[i][1] + '">\n';
                html += '</div>\n';
                html += '<div class="info">\n';
                html += '<div class="info-title">\n';
                html += members[i][0] + '\n';
                html += '</div>\n';
                if (members[i][2] === '') {
                    html += '<div class="info-desc"><br/></div>\n';
                } else {
                    html += '<div class="info-desc">' + members[i][2] + '</div>\n';
                }
                html += '<div class="info-desc">\n';
                if (members[i][3] === '') {
                    html += '<div style="height: 34px"></div>\n';
                } else {
                    html += '<a href="' + members[i][3] + '">\n';
                    html += '<i class="fab fa-steam-symbol"></i>\n';
                    html += '</a>\n';
                }

                if (members[i][4] !== '') {
                    html += '<a target="_blank" href="'+ members[i][4] +'">\n';
                    html += '<i class="fab fa-twitch"></i>\n';
                    html += '</a>\n';
                }
                html += '</div>\n';
                html += '</div>\n';
                html += '</div>\n';
                html += '</div>\n';
            }
        }
        html += '</div>\n'; // close div.row
    }

    $('#members').html(html);
}

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