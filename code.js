var last_position_x; 
var last_position_y;
var current_position_x;
var current_position_y;
var mouseevent="empty";


canvas= document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d");

color ="violet" ;
width = 2;
radius = "61"


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
color - document.getElementById("color").value; 
width_of_line - document.getElementById("width_of_line").valueradius - document.getElementById("radius").value; 
mouseEvent - "mouseDown";



canvas.addEventListener("mouseup" , my_mouseup) ;
function my_mouseup(e) {
    //taking color from input box
    //additional activity start
    
    mouseevent="mouseUp";
   
}

canvas.addEventListener("mouseleave" , my_mouseleave) ;
function my_mouseleave(e) {
    //taking color from input box
    //additional activity start
    
    mouseevent="mouseleave";
   
}

canvas.addEventListener("mousemove" , my_mousemove) ;
function my_mousemove(e)

current_position_x = e.clientX - canvas.offsetLeft; 
current_position_y - e.clienty - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
 console.log("Current position of x and y coordinates = ");
console.log("x -" + current_position_x , "y = " + current_position_y);

ctx.beginPath();
ctx.strokeStyle - color; ctx.lineWidth = lineWidth;
ctx.arc(current_position_x, current_position_y, radius , 2 * Math.PI);
ctx.stroke();

}

function clearArea() {
    ctx.clearRect(0, 0 , canvas.width , canvas.height);

}

 





