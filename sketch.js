const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth - 10, windowHeight - 10);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new Computer(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  compBow = new ComputerBow(
    width - 50,
    computerBase.body.position.y - 280,
    1200,
    1200,
  )
  arrow1 = new ComputerArrow(
    width - 350,
    computerBase.body.position.y - 200,
    100,
    20
  );
  //Create an arrow Object
}

function draw() {
  background(180);

  Engine.update(engine);
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 //The display function
  playerBase.display();
  player.display();


  computerBase.display();
  computer.display();
  
  player.display();
  computer.display()

  compBow.display()
  arrow1.display()
  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow

  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher

    var angle = computer.body.angle
    arrow1.shoot(angle)
  }
}



