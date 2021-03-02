class Ball {

    constructor (x,y) {

        //set predefined radius
        this.radius=80;

        //give options
        var bob_options= {
            isStatic:false,
            frictionAir:0.05,
            density:1.2
        }

        //create body for ball
        this.body=Bodies.circle(x,y,this.radius/2,bob_options);

        //add body to world
        World.add(myWorld,this.body);

    }

    //display to show
    display(){
        
        //control position
        var pos=this.body.position;

        //angle
        var angle=this.body.angle;

        push()

        //translate origin
        translate(pos.x,pos.y);

        //rotate
        rotate (angle);

        //color it purple
        fill ("black");

        //make ellipse mode to center
        ellipseMode (CENTER); 

        //create ellipse to display 
        ellipse(0,0,this.radius, this.radius);

        pop ()

    }



}