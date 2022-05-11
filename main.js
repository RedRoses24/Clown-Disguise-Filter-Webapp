noseX=0;
noseY=0;
function preload(){
    clown_disguise=loadImage('https://i.postimg.cc/sDw07NRH/clown-nose-transparent-removebg-preview.png');
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_disguise, noseX, noseY, 80, 50);

}
function take_snapshot(){
    save('My_Clown_Nosed_Img.png');
}
function modelLoaded(){
   console.log("PoseNet is initialized");
}
function gotPoses(results){
   if(results.length>0){
       console.log(results);
       noseX=results[0].pose.rightEye.x-24;
       noseY=results[0].pose.rightEye.y-15;
       console.log("Nose x= "+noseX);
       console.log("Nose y= "+noseY);
   }
}