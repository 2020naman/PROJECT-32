class Ball{
    constructor(x,y,r)
    {
        let options = {
            isStatic:false
           };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world,this.body);
    }
    show(){
    let pos = this.body.position;
    push();
    ellipseMode(CENTER);
    fill("white");
    strokeWeight(1);
    ellipse(pos.x,pos.y, 50);
    pop();
   }
}