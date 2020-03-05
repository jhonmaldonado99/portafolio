//start

$(document).ready(function() {
    $('#opensidebar').on('click', function() {
        $('.nav-list').addClass('active');
    });

    $('#closesidebar').on('click', function() {
        $('.nav-list').removeClass('active');
    });
});

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    items: 2,
    loop: true,
    dots: false,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});