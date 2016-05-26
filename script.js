(function() {
    var f = document.forms[0];

    if ( typeof f['sum'] !== 'undefined' ) {
        f.addEventListener('submit', function(e) {
            f['sum'].value = 15;
            e.preventDefault();
        }, false);
    }
    else { alert('Your browser is not ready yet.'); }
})();
