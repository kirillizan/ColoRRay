function addEventListeners() {
    $(document).on('mouseup', click);
    $(document).on('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    })
}

function click(evt) {
    if (window.Utils && Utils.isDoubleTapBug(evt)) return false;
    action = $(evt.target).closest('*[data-action]').attr('data-action'),

    switch (action) {
        case 'showmenu':
            showMenu();
            break;
        case 'play':
            showPlay();
            break;
        case 'about':
            showAbout();
            break;
    }    
}

function doAction(action, value) {
    switch (action) {
        case 'showmenu':
            showMenu();
            break;
        case 'play':
            showPlay();
            break;
        case 'about':
            showAbout();
            break;
    }
}

function showMenu() {
    $('.screen').hide().removeClass('show');
    $('#menu').show();
}

function showAbout() {
    $('.screen').hide().removeClass('show');
    $('#about').show();
}

function showPlay() {
    $('.screen').hide().removeClass('show');
    $('#play').show();
}