var mouse_event = "empty";
var last_position_x, last_position_y;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
Width_of_line = 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event = "mouseDown detected";
    color = document.getElementById("color").value;
    Width_of_line = document.getElementById("width_line").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event = "mouseUP detected"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_pos_of_x = e.clientX - canvas.offsetLeft;
    current_pos_of_y = e.clientY - canvas.offsetTop;
    if(mouse_event == "mouseDown detected"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width_of_line;
        console.log("Last position of x and y coordinates");;
        console.log("last position of x = "+last_position_x+"last psoition of y = "+last_position_y);
        ctx.moveTo(last_position_x, last_position_y);
        console.log("Current position of x and y coordinates");
        console.log("x = "+current_pos_of_x+"y = "+current_pos_of_y);
        ctx.lineTo(current_pos_of_x,current_pos_of_y);
        ctx.stroke();
    }
last_position_x = current_pos_of_x;
last_position_y = current_pos_of_y;
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}