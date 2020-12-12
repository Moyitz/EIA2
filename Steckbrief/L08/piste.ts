namespace Skipiste {
    window.addEventListener("load", init);





    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
  
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        console.log(crc2);

        const drawCloud = (x, y) => {
            crc2.beginPath();
            crc2.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            crc2.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            crc2.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
            crc2.moveTo(x + 200, y + 60);
            crc2.lineTo(x, y + 60);
            crc2.strokeStyle = "#797874";
            crc2.stroke();
            crc2.fillStyle = "#8ED6FF";
            crc2.fill()
        }
    
        drawCloud(-40,100);

  
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(650, 250);
        crc2.stroke();
   
        crc2.fillStyle = "black";
        crc2.fillRect(180, 130, 65, 40);
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(220, 150);
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fillRect(300, 170, 65, 40);
        crc2.moveTo(350, 200);
        crc2.lineTo(320, 150);
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fillRect(450, 220, 65, 40);
        crc2.moveTo(460, 180);
        crc2.lineTo(470, 260);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(50, 300); 
        crc2.lineTo(600, 520);
        crc2.stroke(); 

        crc2.beginPath();
        crc2.moveTo(150, 380);
        crc2.lineTo(120, 440);
        crc2.lineTo(180, 440);
        crc2.stroke(); 
        crc2.fillStyle = "green";
        crc2.fill();

   
        crc2.fillStyle = "maroon";
        crc2.fillRect(130, 440, 30, 40);

        crc2.beginPath();
        crc2.moveTo(680, 80);
        crc2.lineTo(650, 140);
        crc2.lineTo(710, 140);
        crc2.stroke(); 
        crc2.fillStyle = "green";
        crc2.fill();

        crc2.fillStyle = "maroon";
        crc2.fillRect(660, 140, 30, 40);

        

        //Berg 1
        crc2.beginPath();
        crc2.moveTo(400, 50);
        crc2.lineTo(420, 15);
        crc2.lineTo(440, 50);
        crc2.stroke(); 

        crc2.beginPath();
        crc2.moveTo(550, 50);
        crc2.lineTo(500, 15);
        crc2.lineTo(540, 50);
        crc2.stroke(); 

        crc2.beginPath();
        crc2.moveTo(550, 50);
        crc2.lineTo(500, 15);
        crc2.lineTo(500, 50);
        crc2.stroke(); 

        //Berg 2
        crc2.beginPath();
        crc2.moveTo(440, 50);
        crc2.lineTo(460, 15);
        crc2.lineTo(480, 50);
        crc2.stroke(); 



        //Berg 3
        crc2.beginPath();
        crc2.moveTo(470, 35);
        crc2.lineTo(500, 15);
        crc2.lineTo(520, 50);
        crc2.stroke(); 

        crc2.beginPath();
        crc2.arc(150, 0, 40, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();

        function Snowflake(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }

        for (let i = 0; i < 5000; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            Snowflake(x, y);
        }
        
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(110, 320);
        crc2.lineTo(150, 330);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.ellipse(130, 280, 11, 7, 10, 10, 99);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "blue";
        crc2.strokeStyle = crc2.fillStyle;
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.ellipse(132, 304, 15, 14, 10, 10, 99);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.lineWidth = 5;
        
        crc2.beginPath();
        crc2.moveTo(130, 330);
        crc2.lineTo(120, 300);
        crc2.closePath();
        crc2.stroke();

 
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(150, 330);
        crc2.lineTo(130, 300);
        crc2.closePath();
        crc2.stroke();


        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(210, 360);
        crc2.lineTo(250, 380);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.ellipse(230, 320, 11, 7, 10, 10, 99);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        crc2.strokeStyle = crc2.fillStyle;
        crc2.lineWidth = 1;
        crc2.fillStyle = "black"
        crc2.beginPath();
        crc2.ellipse(232, 344, 15, 14, 10, 10, 99);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(230, 350);
        crc2.lineTo(220, 360);
        crc2.closePath();
        crc2.stroke();
     
        crc2.lineWidth = 5;
        
        crc2.beginPath();
        crc2.moveTo(230, 350);
        crc2.lineTo(245, 370);
        crc2.closePath();
        crc2.stroke();

        

        

    }
}
