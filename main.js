function preload() {
    
  }
  
  function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet is Initialized');
}

function gotPoses(results) {
  if(results.length > 0) {
  console.log(results);
  nosex = results[0].pose.nose.x-15;
  nosey = results[0].pose.nose.y-15;
  }
  }

function draw() {

}