var mouse_event="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
width=2;

canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
color=document.getElementById("colour").value;
radius=document.getElementById("radius").value;
width=document.getElementById("width").value;
mouse_event="mousedown";
}

canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    mouse_event="mousemove";
    current_position_of_x= e.clientX-canvas.offsetLeft;
  current_position_of_y=e.clientY-canvas.offsetTop;

  if(mouse_event=="mousedown"){
    ctx.beginPath() ;
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
    ctx.stroke()
  }
}
function clear_area(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
