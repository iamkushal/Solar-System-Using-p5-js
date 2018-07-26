// planet class
function planet(c, d, r, s) {
    var colour = c;
    var distance = d;
    var radius = r;
    
    var angle = TWO_PI;
    var speed = s;

    var moons = [];

    this.addMoon = function() {
        var md = distance / 6;
        var mr = radius / 3;
        var ms = speed * 2.5;
        var moon = new planet(250, md, mr, ms);
        moons.push(moon);
    };

    this.addring = function() {
        var md = distance / 10;
        var mr = radius / 10;
        var ms = speed * 2;
        var moon = new planet(250, md, mr, ms);
        moons.push(moon);
    };

    this.update = function() {
        angle += speed;
    }

    this.show = function() {
        push();

        fill(colour);
        rotate(angle);
        translate(distance, 0);
        
        ellipse(0,0,radius,radius);

        for(var m = 0; m < moons.length; m++) {
            moons[m].update();
            moons[m].show();
        };

        pop();
    };
};