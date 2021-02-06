const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops =100
var engine, world;
var rain1 = []
var man
var rand
var thunderCreatedFrame
var thunder1,thunder2,thunder3,thunder4
var thunder

function preload(){
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")
}

function setup(){
   createCanvas(500,600)
   engine = Engine.create();
   world = engine.world;

   for(var i=0; i<maxDrops; i++){
       rain1.push(new rain(random(0,500),random(0,300)))
   }
   
   man = new walkingMan(250,475)

}

function draw(){
    background(23,23,23)
    Engine.update(engine);
    
    for(var i = 0; i < maxDrops; i++){
        rain1[i].display();
        rain1[i].update();
    }

    rand = Math.round(random(1.4));
    if(frameCount % 80 == 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(200,400),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6)

        if(thunderCreatedFrame + 10 == frameCount){
            thunder.destroy();
        }
    }
    drawSprites()
    man.display()
}   

