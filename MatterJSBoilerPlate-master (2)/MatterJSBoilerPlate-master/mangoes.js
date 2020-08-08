class Mango{
constructor(x,y,r){
var options={
    isStatic:true,
    restitution:0,
    friction:1
    
}
this.x = x;
this.y = y;
this.r = r;
this.body = Bodies.circle(this.x,this.y,this.r,options);

this.IMG = loadImage("mango.png");
World.add(world,this.body);
}
display(){
        push();
     translate(this.body.position.x,this.body.position.y);    
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.IMG,0,0,this.r,this.r);
      pop();








}
}







