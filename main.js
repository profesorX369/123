leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;
noseX=0;
noseY=0;

function setup(){
    canvas = createCanvas(400,500);
    canvas.position(800,120)
    video = createCapture(VIDEO);
    video.size(520,520);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){
    background("grey");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("black");
    text('Hello World,This Is Profesor Here',20,400);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX+" nose y = "+noseY);
        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftWrist_x-rightWrist_x);
        console.log("Left Wrist X = "+leftWrist_x+" Right Wrist X = "+rightWrist_x+" difference = "+difference+"px");
        
    }
}