const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
let mousex = 0, mousey = 0;
let x=0, y=0;
let vx=0, vy=0;
canvas.width = innerWidth;
canvas.height = innerHeight;
const strength=0.15, drag=0.75;

addEventListener('mousemove', e => {
  mousex = e.x;
  mousey = e.y;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0, 0, 0, 0.1)";
  c.fillRect(0, 0, innerWidth, innerHeight);
  x+=vx;
  y+=vy;
  let fx = mousex-x;
  let fy = mousey-y;
  fx *= strength;
  fy *= strength;
  vx += fx;
  vy += fy;
  vx *= drag;
  vy *= drag;
  c.beginPath();
  c.fillStyle = 'teal';
  c.arc(x, y, 25, 0, Math.PI*2, false);
  c.fill();
}

animate();