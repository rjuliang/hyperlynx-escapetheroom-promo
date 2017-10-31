var video = document.getElementById('vid');
var jvideo = $("#vid");

jvideo.on("ended", function() {
  console.log("End of video");
  $("#vid").hide();
  $("#choices").show();
});

$("#one, #two").on("click", function() {
  $("#choices").hide();
  $("#vidend").show();
});
