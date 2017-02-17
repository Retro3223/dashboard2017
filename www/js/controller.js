$(function drawRect() {
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