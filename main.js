lipsX=0;
lipsY=0;
function preload(){
    lips_image=loadImage('https://i.postimg.cc/NMBCR128/Lips-PNG-No-Background.jpg');
    

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    lipsX=results[0].pose.lips.x;
    lipsY=results[0].pose.lips.y;
}
}
function modelLoaded(){
    console.log("poseNet is initialised");
}
function draw(){
    image(video,0,0,300,300);
    fill(0,0,255);
    stroke(255,0,0);
    circle(lipsX,lipsY,25);
}
function take_snapshot(){
    save('lipsimage.png');
}