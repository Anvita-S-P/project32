const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;



var base1,base2,base3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,
box21,box22,box23,box24,box25,box26,box27;
var score=0;





















function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

   ground=new Ground(400,390,800, 20);
   base1=new Ground(300,360,800,20);
   base2=new Ground(340,340,800,20);
   base3=new Ground(380,320,800,20);
   //first pyramid.
   box1=new Box(300,355,20,20);
   box2=new Box(320,355,20,20);
   box3=new Box(340,355,20,20);
   box4=new Box(360,355,20,20);

   box5=new Box(300,350,20,20);
   box6=new Box(325,350,20,20);
   box7=new Box(345,350,20,20);

   box8=new Box(300,345,20,20);
   box9=new Box(320,355,20,20);

   //second pyramid.
   box10=new Box(340,355,20,20);
   box11=new Box(360,355,20,20);
   box12=new Box(380,355,20,20);
   box13=new Box(380,355,20,20);

   box14=new Box(340,350,20,20);
   box15=new Box(365,350,20,20);
   box16=new Box(385,350,20,20);

   box17=new Box(340,345,20,20);
   box18=new Box(360,345,20,20);

   //third pyramid.
   box19=new Box(380,325,20,20);
   box20=new Box(380,325,20,20);
   box21=new Box(380,325,20,20);
   box22=new Box(380,325,20,20);

   box23=new Box(380,325,20,20);
   box24=new Box(385,325,20,20);
   box25=new Box(390,325,20,20);
   
   box26=new Box(380,325,20,20);
   box27=new Box(390,325,20,20);


   slingShot=new slingShot(polygon.body,{x:100,y:200});

}

function draw() {
  background(0);  
  
  noStroke();
  textSize(35);
  fill ("white");
  text ("score " +score ,750,50);


  ground.display();
  base1.display();
  base2.display();
  base3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();



  box1.score();
  box2.score ();
  box3.score ();
  box4.score ();
  box5. score();
  box6. score();
  box7. score();
  box8. score();
  box9. score();
  box10. score();
  box11. score();
  box12. score();
  box13. score();
  box14. score();
  box15. score();
  box16. score();
  box17.score();
  box18. score();
  box19. score();
  box20. score();
  box21. score();
  box22. score();
  box23. score();
  box24. score();
  box25. score();
  box26. score();
  box27. score();

















}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
   SlingShot.fly();
}

function keyPressed(){
  if(keyCode===32){

    sling.attach(this.polygon);


  }

}


async function getBackgroundImage(){

  var response= await fetch(http://worldtimeapi.org/timezone/Asia/Kolkata );
  var responseJson=await response.json();
  var dateTime=responseJson.datetime;
  var hour=dateTime.slice(11,13);
  if(hour>=6 && hour<=18){
      bg="yellow";
  }
  else{
      bg= "blue";
  }
   
   
}



















