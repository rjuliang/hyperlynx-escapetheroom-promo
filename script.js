var video = document.getElementById('vid');
var jvideo = $("#vid");

var vin = document.getElementById('vindow');
var vindown = $("#vindow");

var videoend = document.getElementById('vidend');
var viden = $("vidend");

jvideo.on("ended", function() {
  console.log("End of video");
  $("#vid").hide();
  $("#choices").show();
});
