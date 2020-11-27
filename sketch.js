const World= Matter.World
const Engine= Matter.Engine
const Bodies=Matter.Bodies


var engine,world, object

function setup() {
  
 //var canvas= createSprite(200,200,20,20);
//var ground=createSprite(10,300,200,5)
//ground=Bodies.rectangle(10,300,200,5)
engine= Engine.create()
world= engine.world
var ground_options={
  isStatic:true
}
object= Bodies.rectangle(200,100,50,50)
ground=Bodies.rectangle(10,50,200,5, ground_options)
World.add(world,object)
World.add(world,ground)
console.log(object)
}

function draw() {
  background("black");  
  Engine.update(engine);
  rect(object.position.x,object.position.y,50,50)
 // rect.collide(ground)
  drawSprites();
}