const canvas = document.getElementById('canvas');
const width = canvas.clientWidth;
const height = canvas.clientHeight;
const c = canvas.getContext('2d')
c.fillRect(0,0,width,height);
c.fillStyle='white';


function f(x,y,t){
  return [
    -x*x-t*t+x*x*t-y*t-x,
    -x*x+t*t+x*t-x-y
  ]
}

let x=0,y=0, t=-0.48;
function draw(){
  c.fillStyle='rgba(0,0,0,.1)';
  c.fillRect(0,0,width,height);
  c.fillStyle='white';
  
  x=y=t;
  for(let i = 0;i<200;i++){
    
    [x,y]=f(x,y,t);
    c.fillRect(200*x+width/2,200*y+height/2,1,1);
  //console.log(x,y,t)
  }
  //console.log(x,y)
  t+=0.00002;
  requestAnimationFrame(draw)
}
requestAnimationFrame(draw)