var Aufgabe10;
(function (Aufgabe10) {
    class skier extends Aufgabe10.MovingShape {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x >= 800 || this.y >= 600) {
                this.x = Math.random() * 100 + 10;
                this.y = Math.random() * 200 + 195;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += 1.75;
            this.y += 0.75;
        }
        draw() {
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fillRect(this.x, this.y, 5, -20);
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 10, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x + 15, this.y + 4);
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.skier = skier;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=skier.js.map