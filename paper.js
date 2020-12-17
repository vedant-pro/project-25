class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Body=Bodies.circle(x,y,r,options)
        World.add(world,this.Body)
        this.r=r
        this.image=loadImage("crumpled_paper.png")
        
    }
    display(){
        var pos=this.Body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}