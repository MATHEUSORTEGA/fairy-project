var starImg,bgImg;
var star, starBody;
var fada;
var fadaImg
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(150,500)
    fada.addAnimation("fada",fadaImg)
    fada.scale = 0.2
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.velocityY = 5

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    

}

function draw(){
background(bgImg)
drawSprites()
if(keyDown("d")){
fada.velocityX = 5
}
if(keyDown("a")){
    fada.velocityX = -5
}
if(keyDown("w")){
    fada.velocityY = -5
    }
 if(keyDown("s")){
    fada.velocityY = 5
    }
}