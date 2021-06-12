class Bob {
    constructor(x,y) {
       
        var options = {
            isStatic:false,
            restitution:0.8,
           friction:1.0,
           density:7.8
        }
        
    this.body=Bodies.circle(x,y,25,options)
    World.add(world,this.body)

    console.log(this.body)
    
    }
    
    
    display(){
        
   push()
rectMode(CENTER)
fill(rgb(6,253,199))
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,25,25)
pop()
    }
    
}