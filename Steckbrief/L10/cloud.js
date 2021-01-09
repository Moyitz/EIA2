var Aufgabe10;
(function (Aufgabe10) {
    class cloud extends Aufgabe10.MovingShape {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x >= 800) {
                this.x = 0;
            }
            this.x += 1;
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y + 25, 30, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#ffffff";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 25, this.y, 30, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 50, this.y + 25, 30, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.cloud = cloud;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=cloud.js.map