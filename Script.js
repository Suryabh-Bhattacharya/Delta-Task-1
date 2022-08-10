var Btn = document.querySelector('button');
Btn.addEventListener('click', Msg);

function Msg() {
    let name = prompt('Enter your name: ');
    alert("The game has just started " + name);
    document.querySelector('.welname').innerHTML =  "Welcome " + name;
}

const arr=["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10","box11","box12","box13","box14","box15","box16"]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
shuffle(arr);

var r1=[arr[0]]
var r2=[arr[0],arr[1]]
var r3=[arr[0],arr[1],arr[2]]
var r4=[arr[0],arr[1],arr[2],arr[3]]
var r5=[arr[0],arr[1],arr[2],arr[3],arr[4]]
var r6=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]]
var r7=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6]]
var r8=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]]
var r9=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8]]
var r10=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]]
var r11=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10]]
var r12=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11]]
var r13=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11],arr[12]]
var r14=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11],arr[12],arr[13]]
var r15=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11],arr[12],arr[13],arr[14]]
var r16=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11],arr[12],arr[13],arr[14],arr[15]]

b=document.getElementsByClassName(box1)
b.style.animation=blink

