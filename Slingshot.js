class Slingshot {
    constructor(bodyA, bodyB) {
        var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness:0.04,
        length:10,

        }
        this.sling = Constraint.create(options)
        this.bodyA=bodyA
        this.bodyB=bodyB

        World.add(world, this.sling );
      }
      display(){
       var pointA=this.bodyA.position
       var pointB=this.bodyB.position
       strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
}