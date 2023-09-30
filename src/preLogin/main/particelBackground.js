import React, { useEffect, useRef } from 'react';
import logoImage from '../../assets/logo (1).png';


const ParticleBackground = () => {
  const canvasRef = useRef(null);
  let canvas;
  let ctx;
  let particles = [];
  let amount = 0;
  let mouse = { x: 1, y: 1 };
  let radius = 2;
  let timeouts = [];
  const colors = ["#FFFFFF", "#AAAAAA"];
  let ww;
  let wh;
  let loaded = false;

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight;

    if (ww <= 540) {
      radius = 0.5;
    }

    window.addEventListener('resize', initSceneWait);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    initScene();
    requestAnimationFrame(render);

    loaded = true;

    return () => {
      window.removeEventListener('resize', initSceneWait);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  function Particle(x, y) {
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.dest = {
      x: x,
      y: y,
    };
    this.r = Math.random() * 5 + 2;
    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 20;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.01 + 0.94;
    this.color = colors[Math.floor(Math.random() * 6)];
  
    // Add a render method to draw the particle
    this.render = function () {
      this.accX = (this.dest.x - this.x) / 1000;
      this.accY = (this.dest.y - this.y) / 1000;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;
      this.x += this.vx;
      this.y += this.vy;
  
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
  
      const a = this.x - mouse.x;
      const b = this.y - mouse.y+50;
      const distance = Math.sqrt(a * a + b * b);
      if (distance < (radius * 70)) {
        this.accX = (this.x - mouse.x) / 100;
        this.accY = (this.y - mouse.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
      }
    };
  }
  
  function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }

  function onTouchEnd(e) {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  function initScene() {
    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.src = logoImage;


    img.onload = function (e)
    {
        ctx.drawImage(img, ww / 2 - 256, wh / 2 - 256, 512, 512);
        
        let data  = ctx.getImageData(0, 0, ww, wh).data;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "screen";

        particles = [];

        for(let i = 0; i < ww; i += 12){
            for(let j = 0; j < wh; j += 12){
                if(data[ ((i + j * ww) * 4) + 3] > 150){
                    particles.push(new Particle(i,j));
                }
            }
        }

        amount = particles.length;
    }
}


function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < amount; i++) {
        particles[i].render();
    }
}

function initSceneWait() {
    if (loaded && window.innerWidth <= 540) {
        return;
    }

    while (timeouts.length > 0) {
        clearTimeout(timeouts.pop());
    }

    const timeout = setTimeout(initScene, 1500);
    timeouts.push(timeout); 
}

  return <canvas ref={canvasRef} id="particle-canvas" />;
};

export default ParticleBackground;
