var list = [];
var lines;
var lines2 = [];
var data = [];
var typehold,lathold,lonhold;
var listPointer = 0;
var boolClick = 0;

function preload(){
	lines = loadStrings('crime-mapping.csv')
	map = loadImage('CaryNC.png')
	lowcrime = loadImage('lowcrime.png')
	highcrime = loadImage('highcrime.png')
}
function setup() {
	createCanvas(800,1187);
	image(map,0,0);
	list = lines.toString().split(',');
	//print(list)
		for(var i=0; i<5600; i++){
				typehold=list[listPointer];
				listPointer++;
				lathold=list[listPointer];
				listPointer++;
				lonhold=list[listPointer];
				listPointer++;
			data[i]= new dataPoint(typehold,lathold,lonhold);
		//print(data[i].lon+","+data[i].lat+","+data[i].type)
		}
}

function draw(){
	if(!boolClick){
	fill(193, 69, 66);
	stroke(33, 11, 11);
	for(var k=0;k<data.length;k++){
		data[k].display();
	}
	fill(90,15);
	rect(237,380,80,80);
	rect(559,478,80,80);
	if((237<mouseX)&&(mouseX<317)&&(380<mouseY)&&(mouseY<460)){
		stroke(0);
		fill(133, 204, 137,18);
		rect(237,380,80,80);}
	
	if((559<mouseX)&&(mouseX<639)&&(478<mouseY)&&(mouseY<558)){
		stroke(0);
		fill(133, 204, 137,18);
		rect(559,478,80,80);
	}
	}
}

function mousePressed(){
	if((237<mouseX)&&(mouseX<317)&&(380<mouseY)&&(mouseY<460)){
		clickLow();
	}
	else if((559<mouseX)&&(mouseX<639)&&(478<mouseY)&&(mouseY<558)){
		clickHigh();}
	
	var distance = dist(mouseX, mouseY, 500, 400);
	if((distance<15)&&(boolClick)){
		image(map,0,0);
		boolClick=0;
	}
}

function dataPoint(type,lat,lon){
	this.type = type;
	this.lat = height-((float(lat)-35.6532943)*(height/0.237780159));
	this.lon = (float(lon)+78.927789)*(width/0.19792455);
	
	this.display = function(){
		ellipse(this.lon,this.lat,6,6);
	}
}
function clickLow(){
	noStroke();
	fill(0,200);
	rect(0,0,800,1187);
	boolClick = 1;
	image(lowcrime,300,400)
	fill(255);
	textSize(20);
	text("Low Crime Area", 330, 380);
	drawX();
}
function clickHigh(){
	noStroke();
	fill(0,200);
	rect(0,0,800,1187);
	boolClick = 1;
	image(highcrime,300,400)
	fill(255);
	textSize(20);
	text("High Crime Area", 330, 380);
	drawX();
}
function drawX(){
	stroke(255,0,0);
	fill(0);
	ellipse(500,400,30,30);
	fill(255)
	text("X",494,408)
}