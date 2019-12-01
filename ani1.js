		
		var wh=window.innerHeight;
		var ww=window.innerWidth;
	
		var c=document.getElementById("mycan");
		var ctx=c.getContext("2d");
		ctx.strokeStyle="rgba(0,0,0,0.5)";

		var snl=document.getElementById("snl");
		var megadark=document.getElementById("megadark");
		var biggie=document.getElementById("biggie");
		var tiny=document.getElementById("tiny");
		var db16=document.getElementById("db16");
		var sh1=document.getElementById("sh1");
		var sh2=document.getElementById("sh2");
		var sh3=document.getElementById("sh3");
		var sh4=document.getElementById("sh4");
		var sh5=document.getElementById("sh5");
		var sh6=document.getElementById("sh6");
		var sh7=document.getElementById("sh7");
		var sh8=document.getElementById("sh8");
			
		var animate;
		var visible=0;
		var delay=0;
		var x=0;
		var y=4;
		var ai=0; 			//animation index
	
		snl.style.top=wh/3 + "px";
		snl.style.left=ww/3 + "px";		
		megadark.style.width=ww+50+"px";
		megadark.style.height=wh+50+"px";
		biggie.style.width=ww+"px";
		biggie.style.height=wh+"px";
		biggie.style.left='0px';
		tiny.style.top=wh/5+'px';
		tiny.style.left="-200px";
		db16.style.left=ww/3 + 380 + "px";
		db16.style.top=wh/3 + "px";
		sh1.style.left='100px';
		sh1.style.top='0px';
		sh1.style.left=ww*1/6 + 'px';
		sh2.style.top='0px';
		
		function moveleft()
		{	
			megadark.style.display="none";
			switch(ai)
			{
			case 35:
				delay=60;	
				tiny.style.animationDuration='6s';	
				break;
	
			case 38:		
				delay=80;
				visible=1;
				break;		
			
			case 39:
				db16.style.backgroundImage="none";
				snl.style.backgroundImage="none";
				visible=0;
				ctx.clearRect(0,0,2000,1000);
				break;
			
			case 44:
				db16.style.backgroundImage="url('images/db16.png')";
				snl.style.backgroundImage="url('images/snl.png')";
				visible=1;
				break;

			case 45:
				db16.style.backgroundImage="none";
				snl.style.backgroundImage="none";
				visible=0;
				ctx.clearRect(0,0,2000,1000);
				break;
			
			case 46:
				db16.style.backgroundImage="url('images/db16.png')";
				visible=1;
				break;

			case 47:
				db16.style.backgroundImage="none";
				snl.style.backgroundImage="url('images/snl.png')";
				visible=0;
				ctx.clearRect(0,0,2000,1000);
				break;			
		
			case 50:
				db16.style.backgroundImage="url('images/db16.png')";
				visible=1;
				break;

			case 59:
				db16.style.backgroundImage="none";
				visible=0;
				ctx.clearRect(0,0,2000,1000);
				break;			
		
			case 60:
				db16.style.backgroundImage="url('images/db16.png')";
				visible=1;
				break;					

			case 65:
				delay=0;
				tiny.style.animationDuration="1s";
				break;
			}
			
			if(parseInt(tiny.style.top)<wh+20)
			{
				biggie.style.left=parseInt(biggie.style.left)-100+'px';
				tiny.style.left=parseInt(tiny.style.left)+10+'px';
				tiny.style.top=parseInt(tiny.style.top)+5+'px';
			}

			sh1.style.top=parseInt(sh1.style.top)+y+'px';
			if(parseInt(sh1.style.top)>=wh)
			{
				y=-2;
				sh1.style.left=ww*5/6 + 'px';		
			}
			else if(parseInt(sh1.style.top)==-80)
			{
				y=4;
				sh1.style.left=ww*1/6 + 'px';
			}
			sh2.style.left=ww/2 + Math.floor(300*Math.cos(Math.PI/180*x)) + 'px';
			sh2.style.top=wh/2 +Math.floor(300*Math.sin(Math.PI/180*x)) + 'px';
			sh3.style.left=Math.floor(100*Math.cos(Math.PI/180*x)) + 'px';
			sh3.style.top=Math.floor(100*Math.sin(Math.PI/180*x)) + 'px';
			sh4.style.left=ww/2 + Math.floor(340*Math.cos(Math.PI/180*(359-x))) + 'px';
			sh4.style.top=wh/2 +Math.floor(340*Math.sin(Math.PI/180*(359-x))) + 'px';
			sh5.style.left=ww/2 + Math.floor(280*Math.cos(Math.PI/180*(180+x))) + 'px';
			sh5.style.top=wh/2 + Math.floor(280*Math.sin(Math.PI/180*(180+x))) + 'px';
			sh6.style.left=ww -50 + Math.floor(100*Math.cos(Math.PI/180*(200-x))) + 'px';
			sh6.style.top=wh -50 +Math.floor(100*Math.sin(Math.PI/180*(200-x))) + 'px';
			sh7.style.left=ww/2 + Math.floor(200*Math.cos(Math.PI/180*(180+x))) + 'px';
			sh8.style.left=Math.floor(250*Math.cos(Math.PI/180*(x+30))) + 'px';
			sh8.style.top=wh/2 + Math.floor(250*Math.sin(Math.PI/180*(x+30))) + 'px';
			
			x+=1;
			if(x==359)
			x=0;

			if(visible==1)
			{
			ctx.beginPath();		
			ctx.clearRect(0,0,2000,1000);
			ctx.arc(parseInt(sh1.style.left)+8,parseInt(sh1.style.top)+8,24,0,360);
			ctx.arc(parseInt(sh2.style.left)+8,parseInt(sh2.style.top)+8,24,0,360);
			ctx.arc(parseInt(sh3.style.left)+14,parseInt(sh3.style.top)+14,24,0,360);
			ctx.arc(parseInt(sh4.style.left)+8,parseInt(sh4.style.top)+8,24,0,360);
			ctx.arc(parseInt(sh5.style.left)+8,parseInt(sh5.style.top)+8,24,0,360);						ctx.arc(parseInt(sh6.style.left)+14,parseInt(sh6.style.top)+14,24,0,360);
			ctx.arc(parseInt(sh7.style.left),7,14,0,360);
			ctx.arc(parseInt(sh8.style.left)+7,parseInt(sh8.style.top)+7,17,0,360);
			
			ctx.moveTo(parseInt(sh1.style.left)+31,parseInt(sh1.style.top)+7);
			ctx.lineTo(parseInt(sh6.style.left)+38,parseInt(sh6.style.top)+15);
			ctx.lineTo(parseInt(sh4.style.left)+30,parseInt(sh4.style.top)+8);
			ctx.moveTo(parseInt(sh3.style.left)+38,parseInt(sh3.style.top)+15);
			ctx.lineTo(parseInt(sh5.style.left)+30,parseInt(sh5.style.top)+8);
			ctx.moveTo(parseInt(sh2.style.left)+31,parseInt(sh2.style.top)+7);
			ctx.lineTo(parseInt(sh7.style.left)+14,7);
			ctx.moveTo(parseInt(sh8.style.left)+23,parseInt(sh8.style.top)+6);
			ctx.lineTo(parseInt(sh2.style.left)+31,parseInt(sh2.style.top)+7);
			ctx.moveTo(parseInt(tiny.style.left)+80,parseInt(tiny.style.top)+27);
			ctx.arc(parseInt(tiny.style.left)+30,parseInt(tiny.style.top)+27,50,0,360);
			ctx.stroke();
			ctx.closePath();
			}

			ai++;
			animate=setTimeout(moveLeft,40+delay);
		}

		function onlyani()
		{
			megadark.style.display="none";
			tiny.style.display="none";
			biggie.style.display="none";
			db16.style.backgroundImage="url('images/db16.png')";
			snl.style.backgroundImage="url('images/snl.png')";
			delay=0;
			sh1.style.top=parseInt(sh1.style.top)+y+'px';
			if(parseInt(sh1.style.top)>=wh)
			{
				y=-2;
				sh1.style.left=ww*5/6 + 'px';		
			}
			else if(parseInt(sh1.style.top)==-80)
			{
				y=4;
				sh1.style.left=ww*1/6 + 'px';
			}
			sh2.style.left=ww/2 + Math.floor(300*Math.cos(Math.PI/180*x)) + 'px';
			sh2.style.top=wh/2 +Math.floor(300*Math.sin(Math.PI/180*x)) + 'px';
			sh3.style.left=Math.floor(100*Math.cos(Math.PI/180*x)) + 'px';
			sh3.style.top=Math.floor(100*Math.sin(Math.PI/180*x)) + 'px';
			sh4.style.left=ww/2 + Math.floor(340*Math.cos(Math.PI/180*(359-x))) + 'px';
			sh4.style.top=wh/2 +Math.floor(340*Math.sin(Math.PI/180*(359-x))) + 'px';
			sh5.style.left=ww/2 + Math.floor(280*Math.cos(Math.PI/180*(180+x))) + 'px';
			sh5.style.top=wh/2 + Math.floor(280*Math.sin(Math.PI/180*(180+x))) + 'px';
			sh6.style.left=ww -50 + Math.floor(100*Math.cos(Math.PI/180*(200-x))) + 'px';
			sh6.style.top=wh -50 +Math.floor(100*Math.sin(Math.PI/180*(200-x))) + 'px';
			sh7.style.left=ww/2 + Math.floor(200*Math.cos(Math.PI/180*(180+x))) + 'px';
			sh8.style.left=Math.floor(250*Math.cos(Math.PI/180*(x+30))) + 'px';
			sh8.style.top=wh/2 + Math.floor(250*Math.sin(Math.PI/180*(x+30))) + 'px';
			
			x+=1;
			if(x==359)
			x=0;

			ctx.beginPath();		
			ctx.clearRect(0,0,2000,1000);
			ctx.arc(parseInt(sh1.style.left)+8,parseInt(sh1.style.top)+8,24,0,360);
			ctx.arc(parseInt(sh2.style.left)+8,parseInt(sh2.style.top)+8,24,0,360);
			ctx.arc(parseInt(sh3.style.left)+14,parseInt(sh3.style.top)+14,24,0,360);
			ctx.arc(parseInt(sh4.style.left)+8,parseInt(sh4.style.top)+8,24,0,360);
			ctx.arc(parseInt(sh5.style.left)+8,parseInt(sh5.style.top)+8,24,0,360);						ctx.arc(parseInt(sh6.style.left)+14,parseInt(sh6.style.top)+14,24,0,360);
			ctx.arc(parseInt(sh7.style.left),7,14,0,360);
			ctx.arc(parseInt(sh8.style.left)+7,parseInt(sh8.style.top)+7,17,0,360);
			
			ctx.moveTo(parseInt(sh1.style.left)+31,parseInt(sh1.style.top)+7);
			ctx.lineTo(parseInt(sh6.style.left)+38,parseInt(sh6.style.top)+15);
			ctx.lineTo(parseInt(sh4.style.left)+30,parseInt(sh4.style.top)+8);
			ctx.moveTo(parseInt(sh3.style.left)+38,parseInt(sh3.style.top)+15);
			ctx.lineTo(parseInt(sh5.style.left)+30,parseInt(sh5.style.top)+8);
			ctx.moveTo(parseInt(sh2.style.left)+31,parseInt(sh2.style.top)+7);
			ctx.lineTo(parseInt(sh7.style.left)+14,7);
			ctx.moveTo(parseInt(sh8.style.left)+23,parseInt(sh8.style.top)+6);
			ctx.lineTo(parseInt(sh2.style.left)+31,parseInt(sh2.style.top)+7);
			ctx.stroke();
			ctx.closePath();
			animate=setTimeout(onlyani,40+delay);
		}