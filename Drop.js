class drop{
    constructor(x,y){
        var options = {
            restitution:0.1,
            friction:0.1,
        }
        this.radius = 6
        this.body = Bodies.circle(x, y, 6, options);
        World.add(world, this.body);
    }

    //update function to reposition  the drops when they will cross the canvas
    update(){
        if(this.body.position.y>height){
         Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){
        var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      
      fill("blue");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
}