namespace Skipiste {
    window.addEventListener("load", init);


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
  
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        console.log(crc2);

  
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(650, 250);
        crc2.stroke();
   
        crc2.fillStyle = "black";
        crc2.fillRect(180, 95, 65, 40);
        crc2.fillStyle = "black";
        crc2.fillRect(300, 130, 65, 40);
        crc2.fillStyle = "black";
        crc2.fillRect(450, 170, 65, 40);
      
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

    }
}