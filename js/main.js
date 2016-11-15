  function start() {
    return;
  }

  function resize() {
    var win = $(this);

    var desired = {
          width: 320,
          height: 480
        },
        aspectRatio = desired.width / desired.height,
        current = {
          width: win.width() ,
          height: win.height()
        },
        sizeToWidth = ((current.width / current.height) < aspectRatio)
    var box = {
      width: Math.floor(sizeToWidth? current.width : (current.height/desired.height) * desired.width),
      height: Math.floor(sizeToWidth? (current.width/desired.width) * desired.height : current.height)
    }

    //$('#container').css({'width': box.width + 'px', 'height': box.height + 'px'});

    var containerSize = box.width;
    $('h3').css('font-size', Math.round(containerSize * .07) + 'px');
    $('p').css('font-size', Math.round(containerSize * .05) + 'px');
    $('p').css('padding', Math.round(containerSize * .05) + 'px 0');
    $('p').css('line-height', Math.round(containerSize * .1) + 'px');
    $('.menu p').css('font-size', Math.round(containerSize * .1) + 'px');

    addEventListeners();
  }

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
    var $el = $(evt.target).closest('*[data-action]'),
      action = $(evt.target).closest('*[data-action]').attr('data-action'),
      value = $el.attr('data-value');
    // allow hyperlinks to work
    var isLink = ($el && $el.length && $el[0].nodeName == 'A') ? true : false;
    if (action && !isLink) {
      doAction(action, value);
      return false;
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