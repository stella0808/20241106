let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=15    //增加上下幅度
let angle=0   //三角函數內的角度
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Roboto-Black.ttf字型
    font = loadFont("fonts/Roboto-Black.ttf") 
}
//===================================================


function setup() {
  createCanvas(windowWidth, windowHeight,);
  points = font.textToPoints("stella", -300, 80, 200, {
    sampleFactor:0.06
  }); 
    angleMode(DEGREES);
}
function draw() {
  background("#bbd0ff");
  noFill()
  stroke("#b9fbc0")
  strokeWeight(5)
  var rect_width = 50  //宣告一個變數rect_width，方形的寬度
  var bc_w = 50  //宣告一個變數bc_w，大園的寬度
  var sc_w = 25  //宣告一個變數sc-w，小圓的寬度
  rectMode(CENTER)
  for(let j=0;j<25;j=j+1){
    for(let x=0;x<width;x=x+rect_width){
    ellipse(x,25+50*j,bc_w)   //畫橢圓，25為起始點的座標
    rect(x,25+50*j,rect_width)   //畫方形
    ellipse(25+x+rect_width,50+50*j,sc_w)
    }
  }
  translate(mouseX,mouseY)   //打(0，0)座標點，移到滑鼠座標上
  rotate((frameCount)%360)  //以(0,0)中心點旋轉角度，角度為X
  for (let i=0; i<points.length-1; i++) { 
  //strokeWeight(3)
  //stroke("#023e8a")
  fill("#4cc9f0")
  noStroke()
  //ellipse(points[i].x+r*sin(angle+i*20),points[i].y+r*sin(angle+i*20),10)
  strokeWeight(10)
  stroke("#023e8a")
    //text(str(i),points[i].x,points[i].y)
    //ellipse(points[i].x+r*sin(angle+i*20),points[i].y,10)
  line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
 } 
 //angle= angle + 10

   //每畫圓一次就要調整角度+10
}