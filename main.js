const { fabric } = require("./fabric");

var canvas = new fabric.canvas('gold-h1.png', function (img) {
	hole_obj = img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHight(50);
	hole_obj.set({
		top:hole_y;
		left:hole_x;
	});
	canvas.add(hole_obj);
});
new_image;
}

ball_y=0;
ball_x=0;
ball_y=400;
ball_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL()
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png" , function (img){
		hole_obj = img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHight(50);
	hole_obj.set({
		top:ball_y;
		left:ball_x;
	});
	canvas.add(hole_obj);

	}

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x==hole_x)&&(ball_y==hole_y){
		canvas.remove(ball_obj);
		
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

