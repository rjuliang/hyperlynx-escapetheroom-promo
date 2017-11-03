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
  $("#vindow").show();
});

$("#two").on("click", function(){
  $("#choices").hide();
  $("#vidend").show();
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
});

$("#four").on("click", function(){
  $("#last-choice").hide();
  $("#office").show();
});

tab.on("ended", function() {
  $("#desk").hide();
  $("#info").show();
});

offc.on("ended", function() {
  $("#office").hide();
  $("#info").show();
});
