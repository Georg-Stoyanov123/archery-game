class ComputerBow {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic: true})
        World.add(world, this.body)
        this.image = loadImage("assets/computerArcher.png")
    }
    display() {
        var pos = this.body.position
        
        push()
        translate(pos.x, pos.y)
        rotate(90)
        imageMode(CENTER)
        image(this.image, 200, 200, 200, 100);
        pop()
    }
}