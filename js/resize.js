function resize() {
    var win = $(this);

    var desired = {
            width: 320,
            height: 480
        },
        aspectRatio = desired.width / desired.height,
        current = {
            width: win.width(),
            height: win.height()
        },
        sizeToWidth = ((current.width / current.height) < aspectRatio)
    var box = {
        width: Math.floor(sizeToWidth ? current.width : (current.height / desired.height) * desired.width),
        height: Math.floor(sizeToWidth ? (current.width / desired.width) * desired.height : current.height)
    }

    var containerSize = box.width;

    $('#container').css('width', containerSize + 'px');
    $('h3').css('font-size', Math.round(containerSize * .07) + 'px');
    $('p').css('font-size', Math.round(containerSize * .04) + 'px');
    $('p').css('padding', Math.round(containerSize * .05) + 'px 0');
    $('p').css('line-height', Math.round(containerSize * .1) + 'px');
    $('.menu p').css('font-size', Math.round(containerSize * .1) + 'px');
}