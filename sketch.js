const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;

var boxes = [];
var box , ground
var gSlider;
var fVal
var r,g,b;
var w,h;

 
function setup() {
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    gSlider = createSlider(0, 100, 50);
    gSlider.position(600, 410);
    ground = new Ground(600,height,1200,100);
//    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);



}
 
function mousePressed() {
        // Every time a mouse press occures create a new box.
        box = new Box(mouseX,mouseY,w,h);
        boxes.push(box);
}
 
function draw() {
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    w = random(5,50)
    h = random(5,50)
    background(0);
    fVal = gSlider.value();
    world.gravity.y = fVal;
    Engine.update(engine);
    for(var i = 0; i < boxes.length; i++){
        boxes[i].display();
      }
      ground.display();
}