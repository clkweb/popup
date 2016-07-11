function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toUTCString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

/**
 *
 *
 * @param expires
 * @param delay
 */
function beginNewsletterForm(expires, delay) {
    setTimeout(function() {
        jQuery.fancybox({
            padding: '0px',
            openEffect: 'elastic',
            closeEffect: 'elastic',
            centerOnScroll: true,
            type: 'inline',
            href: '#newsletter-popup',
            afterClose: function() {
                jQuery('.subscribe-popup-toggle').slideToggle();
            },
            afterShow: function() {
                createCookie('popup-status', 'true', expires);
            }
        });
        jQuery('#newsletter-popup').trigger('click');
    }, delay)
}

/**
 *
 * @param id
 * @param delay
 */
function beginNewsletterFormNoButton(id, delay) {
    setTimeout(function() {
        jQuery.fancybox({
            padding: '0px',
            openEffect: 'elastic',
            closeEffect: 'elastic',
            centerOnScroll: true,
            type: 'inline',
            href: id
        });
        jQuery(id).trigger('click');
    }, delay)
}

/**
 * Detects mobile device.
 *
 * @returns {boolean}
 */
function detectmob() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
        return true;
    }
    else {
        return false;
    }
}