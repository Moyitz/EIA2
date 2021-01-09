var Aufgabe10;
(function (Aufgabe10) {
    let superClass = [];
    var canvas;
    var image;
    window.addEventListener("load", main);
    function main() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        Aufgabe10.crc2.fillStyle = "#1e8cfd";
        Aufgabe10.crc2.fillRect(0, 0, 800, 600);
        //Berge
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(225, 260);
        Aufgabe10.crc2.lineTo(425, 80);
        Aufgabe10.crc2.lineTo(700, 390);
        Aufgabe10.crc2.lineTo(700, 450);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#d7d7d7";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(325, 350);
        Aufgabe10.crc2.lineTo(655, 55);
        Aufgabe10.crc2.lineTo(800, 217);
        Aufgabe10.crc2.lineTo(800, 600);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        //Skipiste
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 165);
        Aufgabe10.crc2.lineTo(800, 486);
        Aufgabe10.crc2.lineTo(800, 600);
        Aufgabe10.crc2.lineTo(0, 600);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#ffffff";
        Aufgabe10.crc2.fill();
        //Skilift
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 90);
        Aufgabe10.crc2.lineTo(800, 390);
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fillStyle = "#000000";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(365, 225);
        Aufgabe10.crc2.lineTo(360, 245);
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fillStyle = "#000000";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.fillStyle = "#9dcff4";
        Aufgabe10.crc2.fillRect(325, 245, 55, 50);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(325, 245);
        Aufgabe10.crc2.lineTo(380, 245);
        Aufgabe10.crc2.lineTo(380, 295);
        Aufgabe10.crc2.lineTo(325, 295);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        for (let i = 0; i < 4; i++) {
            drawTree(Math.random() * 50 + i * 100, Math.random() * 100 + 475);
        }
        for (let i = 0; i < 4; i++) {
            let c = new Aufgabe10.cloud(Math.random() * 50 + i * 200, Math.random() * 100 + 0, "#000000");
            superClass.push(c);
        }
        for (let i = 0; i < 800; i++) {
            let s = new Aufgabe10.snow(Math.random() * 800 + 0, Math.random() * 600 + 0, "#000000");
            superClass.push(s);
        }
        for (let i = 0; i < 10; i++) {
            let s = new Aufgabe10.skier(Math.random() * 100 + 10, Math.random() * 200 + 195, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            superClass.push(s);
        }
        image = Aufgabe10.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function drawTree(x, y) {
        Aufgabe10.crc2.fillStyle = "#603e1b";
        Aufgabe10.crc2.fillRect(x, y, 28, 27);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(x - 43, y + 5);
        Aufgabe10.crc2.lineTo(x + 17, y - 95);
        Aufgabe10.crc2.lineTo(x + 72, y + 8);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#3a5d25";
        Aufgabe10.crc2.fill();
    }
    function animate() {
        Aufgabe10.crc2.clearRect(0, 0, 800, 600);
        Aufgabe10.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < superClass.length; i++) {
            let s = superClass[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=skipiste.js.map