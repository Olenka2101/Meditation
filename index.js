const playMusic = document.querySelector("#playMusic");
playMusic.addEventListener("click", function() {
    document.querySelector("#player").play();
});
const stopMusic = document.querySelector("#stopMusic");
stopMusic.addEventListener("click", function(){
    document.querySelector("#player").pause();
});