//随机数生成
function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}
var arr = ["music1", "music2", "music3", "music4"];

var count = random(0, 4);
var audio = document.getElementById(arr[count]);
audio.currentTime = 0;
audio.play();

function rplay() {
  audio.currentTime = 0;
  audio.pause();
  audio.play();
}

function play() {
  if (audio !== null) {
    //alert(audio.paused);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}
// 播放常驻
/*
if (audio !== null) {
    //alert(audio.paused);
    audio.play();
}
*/
