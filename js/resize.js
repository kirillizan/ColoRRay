function resize() {
    var win = $(this);

    var desired = { width: 320, height: 480 },
        aspect = desired.width / desired.height,
        current = { width: win.width(), height: win.height() },
        sizeToWidth = ((current.width / current.height) < aspect)

    var containerWidth = Math.floor(sizeToWidth ? current.width : (current.height / desired.height) * desired.width)

    $('#container').css('width', containerWidth + 'px');
    $('h3').css('font-size', Math.round(containerWidth * .07) + 'px');
    $('p').css('font-size', Math.round(containerWidth * .04) + 'px');
    $('p').css('padding', Math.round(containerWidth * .05) + 'px 0');
    $('p').css('line-height', Math.round(containerWidth * .1) + 'px');
    $('.menu p').css('font-size', Math.round(containerWidth * .1) + 'px');
}