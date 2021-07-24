class ComputerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.velocity = p5.Vector.fromAngle(archerAngle)
    this.width = width;
    this.height = height;
    this.archerAngle = archerAngle;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

 display() {
    var tempAngle;
    if (this.body.velocity.y === 0) {
      tempAngle = this.archerAngle+PI/2
    }
    //The matter
    Matter.Body.setAngle(this.body, tempAngle)
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  shoot(archerAngle) {
    this.velocity = p5.Vector.fromAngle(archerAngle + PI/2)
    this.velocity.mult(20)
    Matter.Body.setStatic(this.body, false)
    Matter.Body.setVelocity(this.body, {x: this.velocity.x, y: this.velocity.y})
  }
}
