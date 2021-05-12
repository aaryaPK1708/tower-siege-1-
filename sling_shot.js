class SlingShot {
    constructor(bodyA,pointB){
        var option = {
            bobyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
         
            length : 1.5
        }

        this.sling = Constraint.create(option);
        this.pointB = pointB;
        World.add (world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        storke("torquoise");
        strokeweight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}