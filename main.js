function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLodaded);
    poseNet.on('pose', gotPoses);

}

function modelLodaded(){
    console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

difference = 0;
rightWristX = 0;
leftWristX = 0;