var pelota = document.querySelector('.pelota');

var classpelota = pelota.classList;

document.write(classpelota);

var star = document.getElementById("play");
var  pause = document.getElementById("pause");
var Bstop = document.getElementById("stop");
var Breverse = document.getElementById("reverse");

if (classpelota(1) >= 1) {
    
}

star.addEventListener("click", function(){
    classpelota.remove(2);
    pelota.classList.add("star");
});
pause.addEventListener("click", function(){
    classpelota.remove(2);
    pelota.classList.add("pause")
});
Bstop.addEventListener("click", function(){
    classpelota.remove(2);
    pelota.classList.add("stop")
});
Breverse.addEventListener("click", function(){
    classpelota.remove(2);
    pelota.classList.add("reverse")
});

