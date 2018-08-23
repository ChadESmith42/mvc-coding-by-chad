$(document).ready(function(){
    var cohort = [
        {
            name: 'Jason Brooks',
            domain: 'JasonBrooks.com',
            image: 'http://www.codingbychad.com/Content/images/default_avatar.png',
            link: 'http://www.jasonbrooks.com',
            linkedin: 'https://www.linkedin.com/in/jason-brooks-0b9323b5/'
        },
        {
            name: 'Steven Brown',
            domain: 'StevenLBrownDev.com',
            image: 'http://www.codingbychad.com/Content/images/steven.jpg',
            link: 'http://stevenlbrowndev.com',
            linedin: 'https://www.linkedin.com/in/steven-brown-a04190163/'
        },
        {
            name: 'Kohlsen Burton',
            domain: 'KohlsenBurton.com',
            image: 'http://www.codingbychad.com/Content/images/Kohlsen.jpg',
            link: 'http://www.kohlsenburton.com',
            linkedin: 'https://www.linkedin.com/in/kohlsenburton/'
        },
        {
            name: 'Dustin DeGase',
            domain: 'DegaseDevelopment.com',
            image: 'http://www.codingbychad.com/Content/images/dustin.jpg',
            link: 'http://www.degasedevelopment.com',
            linkedin: 'https://www.linkedin.com/in/dustin-degase-939180163/'
        },

        {
            name: 'Preston Keough',
            domain: 'PrestoCoding.com',
            image: 'http://www.codingbychad.com/Content/images/preston.jpg',
            link: 'http://prestocoding.com',
            linkedin: 'https://www.linkedin.com/in/preston-keough-3ab14a69/'
        },

        {
            name: 'Liz Nuckolls',
            domain: 'LizNuckolls.com',
            image: 'http://www.codingbychad.com/Content/images/default_avatar.png',
            link: 'http://liznuckolls.com',
            linkedin: 'https://www.linkedin.com/in/liz-nuckolls/'
        },

        {
            name: 'Tyler Sandoval',
            domain: 'TylerSandoval.com',
            image: 'http://www.codingbychad.com/Content/images/tyler.png',
            link: 'http://tylersandoval.com',
            linkedin: 'https://www.linkedin.com/in/tyler-sandoval-webdev/'
        },
        {
            name: 'Andrew Tharp',
            domain: 'AndrewTharp.com',
            image: 'http://www.codingbychad.com/Content/images/Andrew.jpeg',
            link: 'http://www.andrewtharp.com',
            linkedin: 'https://www.linkedin.com/in/andrew-tharp/'
        },

        {
            name: 'Gary Williams',
            domain: 'Veteran2Programmer.com',
            image: 'http://www.codingbychad.com/Content/images/default_avatar.png',
            link: 'http://www.veteran2programmer.com',
            linkedin: 'https://www.linkedin.com/in/gary-williams-jr-37b199133/'
        },
        {
            name: 'Michelle Chanda',
            domain: 'CodeChanda.com',
            image: 'http://www.codingbychad.com/Content/images/michelle.jpg',
            link: 'http://www.codechanda.com/',
            linedin: 'https://www.linkedin.com/in/michelle-chanda-68518358/'
        }

    ];

    var cohortCards = "";

    for (var i in cohort) {
    
        cohortCards += '<div class="col-md-4 card">' +
                            '<img class="img-thumbnail" src="' + cohort[i].image +'" alt="Card image">' +
                                '<h4>' + cohort[i].name + '</h4>' +
                                '<p">' + cohort[i].domain + '</p>' +
                                '<a href="' + cohort[i].link + '" target="_blank" class="btn btn-primary">Site Link</a>&nbsp;' +
                                '<a href="' + cohort[i].linkedin + '" target="_blank" class="btn btn-primary">' +
                                    '<i class="fa fa-1x fa-linkedin-square" title="LinkedIn"></i>&nbsp;LinkedIn</a>' +
                            '<br />' +
                        '</div>';
    };

    document.getElementById("cohort-cards").innerHTML = cohortCards;});