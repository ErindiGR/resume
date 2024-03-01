setTimeout(setup, 1000)

isMobile = (window.screen.height > window.screen.width);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const NUM = 10;

var obs=[];

function setup() {
	let proc = document.getElementsByClassName("proc")[0];

	let d = document.createElement("div");
	d.style.position="fixed";
	d.style.top = "50%";
	d.style.left = "50%";
	d.style.width =  "10em";
	d.style.height =  "10em";
	d.style.borderRadius="50%";
	d.style.backgroundColor = "rgb(100,100,255)";
	proc.appendChild(d);

	let sw = document.documentElement.clientWidth;
	let sh = document.documentElement.clientHeight;

	if(isMobile)
		return;
	
	for(i=0;i<NUM;i++)
	{
		d = document.createElement("div");
		proc.appendChild(d);
		d.style.position="fixed";
		
		if(i < 4)
			d.style.top = (sh/2)+((sh/2)/(NUM)) * (i) + sh * 0.1 +"px";
		else
			d.style.top = (sh/2)+((sh/2)/(NUM)) * (i) +"px";

		d.style.left = "-50px";
		d.style.backgroundPosition = getRandomInt(sw) + "px 0px";
		d.style.width =  "200%";
		d.style.height =  (sh/(NUM)) + "px";
		d.style.backgroundRepeat= "repeat no-repeat";
		d.style.backgroundImage = "url(sin.png)";
		d.style.backgroundSize = "600px 100%";
		d.style.filter="drop-shadow(-5px -5px 5px grey)";

		if(i >= NUM-2)
			d.style.zIndex = 100000;

		obs[i]=[d,getRandomInt(1000)];
		
	}

	setTimeout(anim,50);
}

function anim(){

	let sw = document.documentElement.clientWidth;
	let sh = document.documentElement.clientHeight;

	for(i=0;i<NUM;i++)
	{
		obs[i][1] += (3.0/(i+1));
		obs[i][0].style.backgroundPosition =  obs[i][1]+ "px 0px";


		if(i < 4)
			obs[i][0].style.top = (sh/2)+((sh/2)/(NUM)) * (i) + sh * 0.1 +"px";
		else
			obs[i][0].style.top = (sh/2)+((sh/2)/(NUM)) * (i) +"px";

		obs[i][0].style.height =  (sh/(NUM)) + "px";
	}


	setTimeout(anim, 33);
}
