var Aufgabe10;
(function (Aufgabe10) {
    class MovingShape {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
        }
        draw() {
        }
    }
    Aufgabe10.MovingShape = MovingShape;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=MovingShape.js.map