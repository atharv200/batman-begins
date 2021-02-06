class walkingMan {
    constructor(x,y){
        var options = {
            isStatic:true,
        }
      this.radius = 50
      this.Img = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
      this.body = Bodies.circle(x,y,100,options)
      World.add(world,this.body)
    }

    display(){
        imageMode(CENTER)
        image(this.Img,this.body.position.x,this.body.position.y,300,300)
        
    }
}