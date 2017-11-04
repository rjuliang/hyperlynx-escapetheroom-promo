var video = document.getElementById('vid');
var jvideo = $("#vid");

var vin = document.getElementById('vindow');
var vindown = $("#vindow");

var videoend = document.getElementById('vidend');
var viden = $("#vidend");

var table = document.getElementById('desk');
var tab = $("#desk");

var off = document.getElementById('office');
var offc = $("#office");

var $endScreen = $("#end-screen");

jvideo.on("ended", function() {
  console.log("End of video");
  $("#vid").hide();
  $("#choices").show();
});

$("#one").on("click", function(){
  console.log("clicked");
  $("#choices").hide();
  vindown.show();
  vin.play();
});

$("#two").on("click", function(){
  $("#choices").hide();
  $("#vidend").show();
  videoend.play();
});

vindown.on("ended", function() {
  console.log("vindown ended");
  $("#vindow").hide();
  $("#unlocked").show();
});

$("#unlocked").on("click", function(){
  $("#unlocked").hide();
  $("#vidend").show();
});

viden.on("ended", function() {
  console.log("#vidend");
  $("#vidend").hide();
  $("#last-choice").show();
});

$("#three").on("click", function(){
  $("#last-choice").hide();
  $("#desk").show();
  table.play();
});

$("#four").on("click", function(){
  $("#last-choice").hide();
  $("#office").show();
  off.play();
});

tab.on("ended", function() {
  $("#desk").hide();
  $("#info").show();
});

offc.on("ended", function() {
  $("#office").hide();
  $("#info").show();
});
