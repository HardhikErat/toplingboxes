class ground {constructor(){
    var ground_options ={
        isStatic: true
    }

    this.body = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
}
}