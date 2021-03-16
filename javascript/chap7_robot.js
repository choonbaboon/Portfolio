document.getElementById('lefteye').style.backgroundColor = 'purple';
document.getElementById('rightarm').style.backgroundColor = 'green'
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById('mouth').style.backgroundColor = "#FF00FF";
document.getElementById('nose').style.borderRadius = '50%';
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("head").style.transform = "rotate(-15deg)";
var rightEye = document.getElementById('righteye');
rightEye.addEventListener('click', moveUpDown);
var leftEye = document.getElementById('lefteye');
leftEye.addEventListener('click', moveUpDown);

function moveUpDown(t) {
    var robotPart = t.target;
    var top = 0;
    var id = setInterval(frame, 10) //redraw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}







function moveLeftRight(t) {
    var robotPart = t.target;
    var top = 0;
    var id = setInterval(frame, 10) //redraw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}