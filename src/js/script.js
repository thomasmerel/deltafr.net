var leaders = [
    ['Eagle', 'src/img/deltas/opt/eagle.jpg', '1985-04-12', 'https://steamcommunity.com/profiles/76561197970728039', '', 'Eagle#2104'],
    ['Raptor', 'src/img/deltas/opt/raptor.jpg', '', 'https://steamcommunity.com/profiles/76561197961915318', '', 'DeltaFr_Raptor#0649'],
    ['Warthog', 'src/img/deltas/opt/warthog.jpg', '', 'https://steamcommunity.com/profiles/76561198066334393', '', '[DeltaFr]Warthog#9629']
];

var members = [
    ['Alcyon', 'src/img/deltas/opt/alcyon.jpg', '', 'https://steamcommunity.com/profiles/76561198010847814', '', 'alcyon972#2705'],
    ['Ant', 'src/img/deltas/opt/ant.jpg', '', 'https://steamcommunity.com/id/Tuponia', 'https://www.twitch.tv/deltafrant', 'Braco\'#1055'],
    ['Bear', 'src/img/deltas/opt/bear.jpg', '1993-07-05', 'https://steamcommunity.com/profiles/76561198008978169', 'https://www.twitch.tv/thenossy', 'Bear / Cyniade#2680'],
    ['Blackbird', 'src/img/deltas/opt/blackbird.jpg', '', 'https://steamcommunity.com/profiles/76561198053539965', '', 'BlackBird#8088'],
    ['Cheetah', 'src/img/deltas/opt/cheetah.jpg', '', '', '', '[DeltaFr]Cheetah#7223'],
    ['Coyote', 'src/img/deltas/opt/coyote.jpg', '', '', '', 'Coyote#9216'],
    ['Crow', 'src/img/deltas/opt/crow.jpg', '', 'https://steamcommunity.com/profiles/76561198029587542', '', ''],
    ['Dogg', 'src/img/deltas/opt/dogg.jpg', '1981-07-21', 'https://steamcommunity.com/profiles/76561197985342238', '', 'Dogg#8105'],
    ['Fennec', 'src/img/deltas/opt/fennec.jpg', '1997-07-06', 'https://steamcommunity.com/profiles/76561198039833419/', 'https://www.twitch.tv/mr_lo0ky', 'Fennec#4338'],
    ['Gerfaut', 'src/img/deltas/opt/gerfaut.jpg', '', 'https://steamcommunity.com/profiles/76561198011076482', '', 'Gerfaut#8330'],
    ['Goat', 'src/img/deltas/opt/avatar.jpg', '', '', '', 'Nativ_JuFa#1844'],
    ['Gorilla', 'src/img/deltas/opt/gorilla.jpg', '', 'https://steamcommunity.com/profiles/76561193787144601', '', 'Dr4g0v 🔞#9815'],
    ['Guanaco', 'src/img/deltas/opt/guanaco.jpg', '1986-02-27', 'https://steamcommunity.com/profiles/76561198021452134', '', 'Guanaco#5408'],
    ['Harfang', 'src/img/deltas/opt/harfang.jpg', '', 'https://steamcommunity.com/profiles/76561198105484872', '', 'Light#9645'],
    ['Ikran', 'src/img/deltas/opt/ikran.jpg', '1992-01-30', 'https://steamcommunity.com/id/Ciiz79', '', 'Ci\'iz#3573'],
    ['Impala', 'src/img/deltas/opt/impala.jpg', '1982-09-22', 'https://steamcommunity.com/profiles/76561198006371876', '', 'etanmirror#5467'],
    ['Mouse', 'src/img/deltas/opt/avatar.jpg', '', '', '', 'la sourie#6630'],
    ['Licorne', 'src/img/deltas/opt/licorne.jpg', '', '', '', ''],
    ['Octopus', 'src/img/deltas/opt/octopus.jpg', '1987-05-15', 'https://steamcommunity.com/profiles/76561198016252308/', '', 'Octopus#8323'],
    ['Panda', 'src/img/deltas/opt/panda.jpg', '1993-03-09', 'https://steamcommunity.com/id/iEledys', '', ''],
    ['Phoenix', 'src/img/deltas/opt/avatar.jpg', '', '', '', 'Devy#3943'],
    ['Redbull', 'src/img/deltas/opt/redbull.jpg', '', 'https://steamcommunity.com/id/deltafr_redbull', '', 'Red#1343'],
    ['Scarabe', 'src/img/deltas/opt/scarabe.jpg', '', 'https://steamcommunity.com/profiles/76561198030682725', '', 'Scarabe#6100'],
    ['Shark', 'src/img/deltas/opt/shark.jpg', '', '', '', ''],
    ['Stoat', 'src/img/deltas/opt/stoat.jpg', '', '', '', 'C0C0nutzz#9413'],
    ['Tiger', 'src/img/deltas/opt/tiger.jpg', '', '', '', ''],
    ['Vulture', 'src/img/deltas/opt/vulture.jpg', '1994-03-14', 'https://steamcommunity.com/id/Vulture__/', 'https://www.twitch.tv/vulture____', 'Vulture#9999'],
    ['Walrus', 'src/img/deltas/opt/walrus.jpg', '1993-12-30', 'https://steamcommunity.com/profiles/76561198002184444', '', 'Solfoyer#3261']
];

$(document).ready(function () {
    fill('leaders', leaders);
    fill('members', members);
    new ClipboardJS(".clipboard");
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    fillBdayBack();
    fillNews();
});

var timeout = false;

function copyCp() {
    if (timeout === false) {
        $.notify({
            // options
            message: 'Copied to clipboard'
        }, {
            // settings
            type: 'dark',
            delay: 2000,
            allow_dismiss: false,
            animate: {
                enter: 'animated fadeInUp',
                exit: 'animated fadeOutDown'
            },
            placement: {
                from: "bottom",
                align: "center"
            }
        });
        timeout = true;
    }

    setTimeout(function () {
        timeout = false;
    }, 3000);
}

var bdayArray = [];

function isBday(bdate, id) {
    var birthday = new Date(bdate);
    var today = new Date();

    if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate()) {
        bdayArray.push(id)
    }
}

function fillBdayBack() {
    for (var i = 0; i < bdayArray.length; i++) {
        $('#' + bdayArray[i]).addClass('bday');
    }
}

function calcAge(bdate) { // birthday is a date
    var birthday = new Date(bdate);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function fill(id, array) {
    var html = '';
    var nbitems = 3;

    for (var row = 0; row < array.length; row += nbitems) {
        html += '<div class="row text-center justify-content-center">\n'; // open div.row
        for (var i = row; i < (row + nbitems); i++) {
            if (typeof members[i] !== "undefined") {
                html += '<div class="col-4">\n';
                html += '<div class="card hovercard" id="' + array[i][0] + '">\n';
                html += '<div class="cardheader"></div>\n';
                html += '<div class="avatar">\n';
                html += '<img alt="profile image of ' + array[i][0] + '" src="' + array[i][1] + '">\n';
                html += '</div>\n';
                html += '<div class="info">\n';
                html += '<div class="info-title">\n';
                html += array[i][0] + '\n';
                html += '</div>\n';
                ///////// AGE
                if (array[i][2] === '') {
                    html += '<div class="info-desc"><br/></div>\n';
                } else {
                    var age = calcAge(array[i][2]);
                    html += '<div class="age info-desc">' + age + ' ans</div>\n';
                }
                html += '<div class="info-desc">\n';
                ///////// VIDE
                if (members[i][3] === '' && members[i][4] === '' && members[i][5] === '') {
                    html += '<div style="height: 34px"></div>\n';
                }
                ///////// STEAM
                if (array[i][3] !== '') {
                    html += '<a href="' + array[i][3] + '" rel="noopener" aria-label="steam of ' + array[i][0] + '">\n';
                    html += '<i class="fab fa-steam-symbol"></i>\n';
                    html += '</a>\n';
                }
                ///////// TWITCH
                if (array[i][4] !== '') {
                    html += '<a target="_blank" href="' + array[i][4] + '" rel="noopener"  aria-label="twitch of ' + array[i][0] + '">\n';
                    html += '<i class="fab fa-twitch"></i>\n';
                    html += '</a>\n';
                }
                ///////// DISCORD
                if (array[i][5] !== '') {
                    html += '<a target="_blank" class="discord clipboard" href="#" href="#" data-clipboard-text="' + array[i][5] + '" onclick="copyCp()" rel="noopener" aria-label="discord of ' + array[i][0] + '">\n';
                    html += '<i class="fab fa-discord" data-toggle="tooltip" data-placement="top" title="' + array[i][5] + '"></i>\n';
                    html += '</a>\n';
                }
                html += '</div>\n';
                html += '</div>\n';
                html += '</div>\n';
                html += '</div>\n';

                isBday(array[i][2], array[i][0]);
            }
        }
        html += '</div>\n'; // close div.row
    }

    $('#' + id).html(html);
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
            console.log("Le Bomberman a été supprimé ! Mais quelque chose d'autre arrive. Promis !")
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

function fillNews() {
    $.get('countfiles.php')
        .done(function (data) {
        data = data - 1;
        for (var i = data; i >= 0; i--) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var container = $("#news-container");
                    container.append(this.responseText);
                    container.append('' +
                        '<div class="row">' +
                        '   <div class="col">' +
                        '       <hr>' +
                        '   </div>' +
                        '</div>'
                    );
                }
            };
            xhttp.open("GET", "news/"+ i +".html", false);
            xhttp.send();
        }
    });
}