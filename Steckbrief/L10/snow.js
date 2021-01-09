var Aufgabe10;
(function (Aufgabe10) {
    class snow extends Aufgabe10.MovingShape {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.y >= 600) {
                this.y = 0;
            }
            this.y += 1;
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#d6cac9";
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.snow = snow;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=snow.js.map