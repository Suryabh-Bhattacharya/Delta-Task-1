function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', Msg);

function Msg() {
    let name = prompt('Enter your name: ');
    alert("The game has just started " + name);
}

const arr=["box-1","box-2","box-3","box-4","box-5","box-6","box-7","box-8","box-9","box-10","box-11","box-12","box-13","box-14","box-15","box-16"]
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
var r14=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11].arr[12],arr[13]]
var r15=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11].arr[12],arr[13],arr[14]]
var r16=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11].arr[12],arr[13],arr[14],arr[15]]

var level=1

blink(arr[0]);

function blink(){
  var box=document.getElementById("box-1");
  box.style.opacity=0;
}



