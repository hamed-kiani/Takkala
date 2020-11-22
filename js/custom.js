
//function persiaNumber() {
//    jQuery('*').persiaNumber({});
//}
/*************************
Menu Bar
*************************/
function megaMenu() {
    jQuery('#menu-1').megaMenu({
        // DESKTOP MODE SETTINGS
        logo_align: 'left', // align the logo left or right. options (left) or (right)
        links_align: 'left', // align the links left or right. options (left) or (right)
        socialBar_align: 'left', // align the socialBar left or right. options (left) or (right)
        searchBar_align: 'right', // align the search bar left or right. options (left) or (right)
        trigger: 'hover', // show drop down using click or hover. options (hover) or (click)
        effect: 'fade', // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
        effect_speed: 400, // drop down show speed in milliseconds
        sibling: true, // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
        outside_click_close: true, // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
        top_fixed: false, // fixed the menu top of the screen. options (true) or (false)
        sticky_header: true, // menu fixed on top when scroll down down. options (true) or (false)
        sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
        menu_position: 'horizontal', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
        full_width: true, // make menu full width. options (true) or (false)
        // MOBILE MODE SETTINGS
        mobile_settings: {
            collapse: true, // collapse the menu on click. options (true) or (false)
            sibling: true, // hide the others showing drop downs when click on current drop down. options (true) or (false)
            scrollBar: true, // enable the scroll bar. options (true) or (false)
            scrollBar_height: 400, // scroll bar height in px value. this option works if the scrollBar option true.
            top_fixed: false, // fixed menu top of the screen. options (true) or (false)
            sticky_header: true, // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 200 // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
        }
    });
}


function owlslider() {
    jQuery('#owl-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'fadeOut',
    });
}


function owlproduct() {
    jQuery('#owl-product').owlCarousel({
        items: 8,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            356: {
                items: 3,
            },
            454: {
                items: 4,
            },
            552: {
                items: 5,
            },
            768: {
                items: 4,
            },
            935: {
                items: 5,
            },
            992: {
                items: 3,
            },
            1068: {
                items: 4,
            },
            1303: {
                items: 5,
            }
        }
    });
}


function owlPopular() {
    jQuery('#owl-Popular').owlCarousel({
        items: 6,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            338: {
                items: 3,
            },
            480: {
                items: 4,
            },
            550: {
                items: 5,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
}

function owlDoctors() {
    jQuery('#owl-Doctors').owlCarousel({
        items: 30,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            380: {
                items: 2,
            },
            490: {
                items: 4,
            },
            600: {
                items: 5,
            },
            700: {
                items: 6,
            },
            847: {
                items: 7,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 7,
            }
        }
    });
}



/*************************
All function are called here 
*************************/
$(document).ready(function () {
    //persiaNumber(),
    megaMenu(), //این علامت های آخرش خیلی مهمه
    owlslider(),
    owlproduct(),
    owlPopular(),
    owlDoctors();


});


