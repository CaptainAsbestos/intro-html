var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);


//var date = new Date();
//var hour = date.getHours();
//var min = date.getMinutes();
//document.write(hour.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false}) + ":" + min.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false}));
//console.log("Done!");
