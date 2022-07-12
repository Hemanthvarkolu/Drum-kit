for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var t = this.innerHTML;
    actionsound(t);
    actionflash(t);
  });
}
document.addEventListener("keydown",function(){
  actionsound(event.key);
  actionflash(event.key);
});
function actionsound(t){
  switch (t) {
    case "w":
      var temp = new Audio('sounds/crash.mp3');
      temp.play();
    case "a":
      var temp = new Audio('sounds/kick-bass.mp3');
      temp.play();
    case "s":
      var temp = new Audio('sounds/snare.mp3');
      temp.play();
    case "d":
      var temp = new Audio('sounds/tom-1.mp3');
      temp.play();
    case "j":
      var temp = new Audio('sounds/tom-2.mp3');
      temp.play();
    case "k":
      var temp = new Audio('sounds/tom-3.mp3');
      temp.play();
    case "l":
      var temp = new Audio('sounds/tom-4.mp3');
      temp.play();
      break;
    default:
      console.log(t);
  }
}

function actionflash(t){
  var activeButton=document.querySelector("."+t);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
