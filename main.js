canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

images_of_mars = ["black_white_mars.jpg", "mars_2.jpg", "mars_3.jpg", "mars_4.jpg"];

random_number =Math.floor(Math.random()*4);

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = images_of_mars[random_number];
console.log("background_image = "+background_image);
rover_image = "rover.png";

function add(){
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

rover_imgtag = new Image();
rover_imgtag.onload = uploadRover;
rover_imgtag.src = rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", key_down);
function key_down(e){
keypressed = e.keyCode;
console.log(keypressed);

if(keypressed == "38")
{
up();
console.log("up");    
}

if(keypressed == "40")
{
down();
console.log("down");
}

if(keypressed == "37")
{
left();
console.log("left");
}

if(keypressed == "39")
{
right();
console.log("right");
}
}

function up(){
if(rover_y >= 0){
rover_y = rover_y - 10;
console.log("When up arrow key is pressed then, x = "+rover_x + " ,y = "+rover_y);
uploadBackground();
uploadRover();
}
}

function down(){
if(rover_y <= 500){
rover_y = rover_y + 10;
console.log("When down arrow key is pressed then, x = "+rover_x + " ,y = "+rover_y);
uploadBackground();
uploadRover();
}
}

function left(){
if(rover_x >= 0){
rover_x = rover_x - 10;
console.log("When left arrow key is pressed then, x = "+rover_x + " ,y = "+rover_y);
uploadBackground();
uploadRover();
}
}

function right(){
if(rover_x <= 700){
rover_x = rover_x + 10;
console.log("When right arrow key is pressed then, x = "+rover_x + " ,y = "+rover_y);
uploadBackground();
uploadRover();
}    
}