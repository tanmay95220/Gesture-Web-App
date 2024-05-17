nose_x = 0;
nose_y = 0;
leftwrist_x = 0;
rightwrist_x = 0;
difference = 0;

function setup() 
{ 
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    webcam = createCapture(VIDEO);
    webcam.size(550,500);
    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw()
{
    background("yellow");
    fill("grey");
    stroke("blue");
    square(nose_x, nose_y, difference);
    document.getElementById("size").innerHTML = "Width and Height of the square = " + difference + "px";
}

function modelLoaded()
{
    console.log("modelLoaded");
}

function gotposes(result)
{
    console.log("gotposes");
    if (result.length>0) 
{
    console.log(result);
    nose_x = result[0].pose.nose.x;
    nose_y = result[0].pose.nose.y;
    console.log(nose_x, nose_y);
    leftwrist_x = result[0].pose.leftWrist.x;
    rightwrist_x = result[0].pose.rightWrist.x;
    difference = floor(leftwrist_x - rightwrist_x);
    console.log(difference);
}
}