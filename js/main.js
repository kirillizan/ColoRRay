  function start() {
    showMenu();
    return;
  }

  function resize() {
    var win = $(this);

    var desired = {
          width: 320,
          height: 480
        },
        aspectRatio = desired.width / desired.height,
        viewport = {
          width: win.width() ,
          height: win.height()
        },
        sizeToWidth = ((viewport.width / viewport.height) < aspectRatio)
    var box = {
      width: Math.floor(sizeToWidth? viewport.width : (viewport.height/desired.height) * desired.width),
      height: Math.floor(sizeToWidth? (viewport.width/desired.width) * desired.height : viewport.height)
    }

    $('#container').css({'width': box.width + 'px', 'height': box.height + 'px'});

    var containerSize = box.width;


    $('#menu p').css('font-size', Math.round(containerSize * .1) + 'px')
    $('#menu p').css('padding', Math.round(containerSize * .05) + 'px 0')
    $('#menu p').css('line-height', Math.round(containerSize * .1) + 'px')
  }


  function addEventListeners() {
    document.addEventListener("backbutton", backButtonPressed, false);
    if (window.WinJS)
      WinJS.Application.onbackclick = backButtonPressed;
    $(document).on('touchend mouseup', click);
    $(document).on('touchstart mousedown', '#grid td', tapTile);
    $(document).on('contextmenu', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    })
  }

  function click(evt) {
    if (window.Utils && Utils.isDoubleTapBug(evt)) return false;
    var $el = $(evt.target).closest('*[data-action]'),
      action = $(evt.target).closest('*[data-action]').attr('data-action'),
      value = $el.attr('data-value');
    // allow regular hyperlinks to work
    var isLink = ($el && $el.length && $el[0].nodeName == 'A') ? true : false;
    if (action && !isLink) {
      doAction(action, value);
      return false;
    }
  }

  function doAction(action, value) {
    switch (action) {
      case 'about':
        showAbout();
        break;
    }
  }

  function showMenu() {
    onHomeScreen = true;
    $('.screen').hide().removeClass('show');
    $('#menu').show();
  }

  function showAbout() {
    onHomeScreen = false;
    $('.screen').hide().removeClass('show');
    $('#about').show();
  }