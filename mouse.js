var canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
console.log(canvas.width);
console.log(canvas.height);
console.log(c);

var mouse = {

	x:undefined,
	y: undefined
}
var maxRadius=40;
// var minRadius=2;

var colorArray=["red","blue","black","green","rgb(255,25,50)"];

console.log(colorArray.length);

 window.addEventListener('mousemove',
	function(event){

		mouse.x=event.x;
		mouse.y=event.y;
		console.log(mouse);
	});

 window.addEventListener('resize',function(){

		canvas.width=window.innerWidth;
		canvas.height=window.innerHeight; 	
		init();
 });

function Circle(x,y,dx,dy,radius){
	console.log(x,y,dy.dx,radius);
	this.x=x;
	this.dx=dx;
	this.dy=dy;
	this.y=y;
	this.radius=radius;
	this.minRadius=radius;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw=function (){
			c.beginPath();
			c.arc(this.x,this.y,this.radius,0,2*Math.PI);
			// c.strokeStyle="blue";
			// c.stroke();
			c.fillStyle=this.color
			c.fill();
						}

	this.update=function(){

		if(this.x + this.radius >window.innerWidth || this.x-this.radius<0){
			this.dx=-this.dx;
		}

		if(this.y + this.radius >window.innerHeight || this.y-this.radius<0){
			this.dy=-this.dy;
		}
		this.x +=this.dx;
		this.y +=this.dy;


		if(mouse.x-this.x<50 && mouse.x-this.x>-50 &&
			mouse.y-this.y<50  && mouse.y-this.y>-50 
			){

			if(this.radius<maxRadius){
				this.radius +=1;
			}

			
		}else if(this.radius>this.minRadius){

			this.radius -= 1;
		}


		this.draw();
	}
}


var circleArray=[];

function init(){

	circleArray=[];


for (var i=0;i<800;i++){
	var x=Math.random()*(canvas.width-radius*2)+radius;
	console.log(x);
	var y=Math.random()*(canvas.height-radius*2)+radius;	
	var dy=(Math.random()-0.5)*2;
	var dx=(Math.random()-0.5)*2;
	var radius=Math.random()*3 + 1;
	circleArray.push(new Circle(x,y,dx,dy,radius));

}
};

function animate() {
	
	requestAnimationFrame(animate);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
	
	console.log(circleArray);
	for (var i= 0;i < circleArray.length;i++){

		circleArray[i].update();

	}
										

}
console.log('this');
animate();
init();

