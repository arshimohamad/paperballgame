class Box{
    constructor(x,y,w,h){
        var option={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.rectangle(x,y,w,h,option);
        this.width=w;
        this.height=h;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
        
    }
}