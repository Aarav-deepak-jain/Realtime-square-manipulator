noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log("posenet is initialized!");
}

function draw() {

    document.getElementById("square_side").innerHTML = "Width and Height will be = "+difference+"px";

    background('#808080');
    fill('#000000');
    stroke('#000000');
    square(noseX, noseY, difference);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = "+noseX+" nose Y = "+noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("rightWrist X = "+ rightWristX+"leftWrist X = "+ leftWristX+"difference = "+ difference );

    }
}