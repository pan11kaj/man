class STONE{
      constructor(x,y,r){
      var options={
    isStatic:false,
    restitution:8,
    friction:1,
    density:1.2
}
this.x  = x;
this.y = y;
this.r = r;
this.body = Bodies.circle(this.x,this.y,this.r,options);
this.image = loadImage("stone.png");
World.add(world,this.body);
      }


display(){
  var pos =  this.body.position;
  var pos2 = this.body.position;
  translate(pos,pos2);
  push();


image(this.image,pos.x,pos2.y,this.r,this.r)
pop();
}}