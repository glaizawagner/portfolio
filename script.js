// /* eslint-disable strict */

function close_home() {
    let x = document.getElementsByClassName('navigation__item');
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener('click', 
        function() {
            this.parentElement.style.display = 'none';
            location.reload();
            history.go(0);
        });
    }
}
$(close_home);
