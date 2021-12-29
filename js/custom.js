$(document).ready(function () {

    // seps slider
    $(".steps-slider").slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
        ],
    }, 1500);





    // remaining time 

    var year = document.getElementById('year');
    var hours = document.getElementById('hours');
    var minute = document.getElementById('minute');
    var seconds = document.getElementById('seconds');


    var currentYear = new Date().getFullYear();
    var nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    // function creation
    function countdown() {
        var currentTime = new Date();
        var diff = nextYear - currentTime;

        var s = Math.floor(diff / 1000) % 60;
        var m = Math.floor(diff / 1000 / 60) % 60;
        var h = Math.floor(diff / 1000 / 60 / 60) % 24;

        // dom

        hours.innerHTML = (h < 10) ? "0" + h : h;
        minute.innerHTML = (m < 10) ? "0" + m : m;
        seconds.innerHTML = (s < 10) ? "0" + s : s;

    }

    // bom

    setInterval(countdown, 1000);
    year.innerHTML = nextYear.getFullYear();



});