var line1 = new TimeSeries();

$(function(){
var smoothie = new SmoothieChart();
console.info(document.getElementById("mycanvas"));
smoothie.streamTo(document.getElementById("mycanvas"), 1000);

smoothie.addTimeSeries(line1);

});

function onValueChanged(key, value, isNew) {
	console.info(key, value);
	if (key == "/Usage/Client/Dashboard/Kbps") {
		line1.append(new Date().getTime(), value);
	}
}

$(function(){
	console.info("really getting called");
    NetworkTables.addGlobalListener(onValueChanged, true);
});