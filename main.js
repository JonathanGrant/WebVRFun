function initialCometSetup() {
  var x = 0, y = 5.25, z = -5;
  var myComet = document.getElementById('comet');
  myComet.setAttribute('position', {x: x, y: y, z: z});
  console.log(myComet);
}

function changeZofComet() {
  console.log("asdasd here")
  var myComet = document.getElementById('comet');
  var myPos = myComet.getAttribute('position');
  console.log(myPos.y)
  myPos.y = myPos.y - 0.01;
  myComet.setAttribute('position', myPos);
  if (myPos.y > 0) {
    setTimeout(10000, changeZofComet());
  } else {
    console.log("schmuguwuga")
  }
}

setTimeout(10000, initialCometSetup());