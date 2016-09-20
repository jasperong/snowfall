(function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var flakes = [];
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  var bg = new Image();
  bg.src = 'xmas.jpg';

  function addFlake(){
    var x = Math.floor(Math.random() * canvas.width);
    var y = 1;
    var dy = Math.floor(Math.random() * 6 + 1);
    flakes.push({'x': x, 'y': y, 'dy': dy})
  }

  function drawSnow(){
    addFlake();
    addFlake();

    for (var i = 0; i < flakes.length; i++) {
      flakes[i]

      ctx.beginPath();
      ctx.arc(flakes[i].x, flakes[i].y += flakes[i].dy / 2, flakes[i].dy, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
      ctx.closePath();

      if (flakes[i].y > canvas.height) {
        flakes.splice(i, 1);
      }
    }
  }

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, 0, canvas.width, canvas.height);
    drawSnow();
  }

  setInterval(draw, 10)
}());
