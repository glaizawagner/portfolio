/* eslint-disable strict */

function close_home(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
        
    });
}

close_home(function () {
    let x = document.getElementsByClassName('navigation__item');
    for (let i = 0; i < x.length; i++) {

        if((navigator.userAgent.indexOf('Firefox') !== -1)) {
            x[i].addEventListener('click', 
            function() {
                window.location.reload(true);
            });
        } else {
            x[i].addEventListener('click', 
            function() {
                this.parentElement.style.display = 'none';
                location.reload();
            });
        }
    }
});

$(close_home);
