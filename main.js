//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d"); //faltou um ; no final do comando

//Dê altura e largura específicas para a imagem do carro
greencar_width = 75; //o nome da variável deve ser greencar_width 
greencar_height= 100; //o nome da variável deve ser greencar_height

background_Image = "parkingLot.jpg"; //o nome da variável deve ser background_Image
greencar_Image = "car2.png"; //o nome da variável deve ser greencar_Image

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
ctx.drawIMage(background_Imgtag, 0, 0, canvas.width, canvas.height);
// na linha acima substitua greencar_Imgtag por backgroud_Imgtag, greencar_x por 0, greencar_y por 0, greencar_height por canvas.width,
// e  greencar_width por carvas.height
}

function uploadgreencar() { //troque por uploadgreencar, pois nas outras partes do código está tudo minúsculo
	//Defina a função ‘uploadGreenCar’. ← ignore essa instrução, pois precisa estar tudo minúsculo para ficar igual ao restante do código
	ctx.drawIMage(greencar_Imgtag, greencar_x, greencar_y, greencar_width, greencar_height);
	//inverta a posição do greencar_height e do greencar_widht (largura primeiro, depois altura)
	
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
	if(greencar_y <=350) //aqui greencar_y deve ser <=350
	 greencar_y = greencar_y + 10; //aqui greencar_y soma 10 para ir para baixo
	 console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
	 uploadBackground();
	 uploadgreencar(); 
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_x >=0) //aqui deve ser greencar_x pois esquerda é eixo horizontal, ou seja, eixo x
	 greencar_y = greencar_x - 10; //trocar para greencar_x
	 console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
	 uploadBackground();
	 uploadgreencar(); 
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_x <=750) //trocar para greencar_x e deve ser <=750
	 greencar_x = greencar_x + 10; // trocar por greencar_x e soma 10 para ir para a direita
	 console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
	 uploadBackground();
	 uploadgreencar(); 
}
