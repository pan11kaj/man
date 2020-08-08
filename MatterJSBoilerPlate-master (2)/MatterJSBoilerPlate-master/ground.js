class Ground{
    constructor(){
  var options={
      isStatic:true
  }
   this.body = Bodies.rectangle(200,700,600,10);  
   this.x = 400;
   this.y = 670;
   this.width = 800;
   this.height = 10;
   World.add(world,this.body);

    
}
display(){
fill("green");
rect(this.x,this.y,this.width,this.height);


}}