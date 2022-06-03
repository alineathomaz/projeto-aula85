//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

//Dê altura e largura específicas para a imagem do carro
greencarImage_width = 75;
greencarImage_height= 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x= 5;
greencar_y = 225;

function add() {
	//carregar carro e imagens de fundo na tela.
	background_Imgtag =  new Image();
	background_Imgtag.onload = uploadBackground;
	background_Imgtag.src=background_Image;

	grenncar_Imgtag =  new Image();
	greencar_Imgtag.onload = uploadgreencar;
	greencar_Imgtag.src=greencar_Image;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
ctx.drawIMage(greencar_Imgtag, greencar_x, greencar_y, greencar_height, greencar_width);
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawIMage(greencar_Imgtag, greencar_x, greencar_y, greencar_height, greencar_width);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	//Definir função para mover o carro para cima
	 if(greencar_y >=0)
	 greencar_y = greencar_y - 10;
	 console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
	 uploadBackground();
	 uploadgreencar(); 
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencar_y >=0)
	 greencar_y = greencar_y - 10;
	 console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
	 uploadBackground();
	 uploadgreencar(); 
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_y >=0)
	 greencar_y = greencar_y - 10;
	 console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
	 uploadBackground();
	 uploadgreencar(); 
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_y >=0)
	 greencar_y = greencar_y - 10;
	 console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
	 uploadBackground();
	 uploadgreencar(); 
}
