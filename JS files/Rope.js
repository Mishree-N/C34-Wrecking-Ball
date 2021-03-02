class Rope {

    //give body and position paarmeters
    constructor (BodyX,PointY){

        //options
        var options = {
            bodyA : BodyX,
            pointB : PointY,
            stiffness : 0.05,
            length : 250
        }

        //create constraint rope
        this.rope=Constraint.create(options);

        //add to world
        World.add(myWorld,this.rope);

    }

    display(){

        //varibales for BodyA and PointB
        var pointA, pointB;

        pointA=this.rope.bodyA.position;
        pointB=this.rope.pointB;

        push ();

        //add strokeweight and color
        strokeWeight(4);
        stroke ("red");

        //create line for display
        line (pointA.x, pointA.y, pointB.x, pointB.y);

        pop ();

    }

    

}

