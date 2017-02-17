$(function drawRect() {
     function getOffsetTopLeft(elt) {
        // see http://javascript.info/tutorial/coordinates
        var box = elt.getBoundingClientRect()
        return { 
            top: box.top + window.pageYOffset, 
            left: box.left + window.pageXOffset
        };
    }

    function pad(x) {
        var s = x + "";
        var n = s.length;
        for(var i = n; i<5; i++) {
            s = "&nbsp;" + s;
        }
        return s;
    }

    function onMouseMove(_event) {
        var canvas = document.getElementById('controller');
        var origin = getOffsetTopLeft(canvas);
        var raw_x = _event.layerX - Math.floor(origin.left);
        var raw_y = _event.layerY - Math.floor(origin.top);
        var display = "" + pad(raw_x) + " " + pad(raw_y);
        document.getElementById('xyreporter').innerHTML = display; 
    }
    var canvas = document.getElementById("controller");
    canvas.addEventListener('mousemove', onMouseMove);

    var draw = SVG('controller').size("100%", 700);
    var image = draw.image("img/controller.jpg").move(100, 0);

    var left_stick_text = draw.text("lateral motion").move(90, 20);
    var left_stick = draw.line(241, 87, 140, 40).stroke({
        color: "skyblue",
        width: 2
    });

    var right_stick_text = draw.text("climber on (press)").move(560, 130);
    var right_stick = draw.line(385, 145, 550, 140).stroke({
        color: "skyblue",
        width: 2
    });

    var d_pad_up_text = draw.text("toggle shooter").move(30, 90);
    var d_pad_up = draw.line(287, 125, 130, 100).stroke({
        color: "skyblue",
        width: 2
    });

    var d_pad_left_text = draw.text("ball intake in").move(20, 135);
    var d_pad_left = draw.line(280, 145, 110, 145).stroke({
        color: "skyblue",
        width: 2
    });
});
