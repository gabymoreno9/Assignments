




//CUSTOM SHAPES, NO OVERLAP
HomeDemosTutorialDocsCustom BuildSupportTests/BenchmarksTeam
Fabric.js demos · Controls customization
 
 hasControls

 hasBorders

 hasRotatingPoint

 visible

 selectable

 evented

 transparentCorners

 centeredScaling

 centeredRotation

cornerStyle  

padding

cornerSize

rotatingPointOffset

setControlVisible

        

borderColor

cornerColor

cornerStrokeColor

 (function() {
  var canvas = this.__canvas = new fabric.Canvas('c');

  var rect = new fabric.Rect({
    left: 150,
    top: 200,
    originX: 'left',
    originY: 'top',
    width: 150,
    height: 120,
    angle: -10,
    fill: 'rgba(255,0,0,0.5)',
    transparentCorners: false
  });

  canvas.add(rect).setActiveObject(rect);

  function observeBoolean(property) {
    document.getElementById(property).onclick = function() {
      canvas.item(0)[property] = this.checked;
      canvas.renderAll();
    };
  }

  function observeNumeric(property) {
    document.getElementById(property).oninput = function() {
      canvas.item(0)[property] = parseFloat(this.value);
      if (property === 'padding') {
        canvas.item(0).setCoords();
      }
      canvas.requestRenderAll();
    };
  }

  function observeValue(property) {
    document.getElementById(property).oninput = function() {
      canvas.item(0)[property] = this.value;
      canvas.requestRenderAll();
    };
  }

  function observeRadio(property) {
    document.getElementById(property).onchange = function() {
      var name = document.getElementById(this.id).name;
      canvas.item(0)[name] = this.value;
      canvas.renderAll();
    };
  }

  function observeOptionsList(property) {
    var list = document.querySelectorAll('#' + property +
    ' [type="checkbox"]');
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].onchange = function() {
        canvas.item(0)[property](this.name, this.checked);
        canvas.renderAll();
      };
    };
  }

  observeBoolean('hasControls');
  observeBoolean('hasBorders');
  observeBoolean('hasRotatingPoint');
  observeBoolean('visible');
  observeBoolean('selectable');
  observeBoolean('evented');
  observeBoolean('transparentCorners');
  observeBoolean('centeredScaling');
  observeBoolean('centeredRotation');

  observeNumeric('padding');
  observeNumeric('cornerSize');
  observeNumeric('rotatingPointOffset');
  observeValue('borderColor');
  observeValue('cornerColor');
  observeValue('cornerStrokeColor');
  observeRadio('cornerStyle1');
  observeRadio('cornerStyle2');

  observeOptionsList('setControlVisible');
})();






//PROJECT WITH BIG BUNNY VIDEO DEMO
HomeDemosTutorialDocsCustom BuildSupportTests/BenchmarksTeam
Fabric.js demos · HTML5 <video> element
 var canvas = new fabric.Canvas('c');
var video1El = document.getElementById('video1');
var webcamEl = document.getElementById('webcam');

var video1 = new fabric.Image(video1El, {
  left: 200,
  top: 300,
  angle: -15,
  originX: 'center',
  originY: 'center',
  objectCaching: false,
});

var webcam = new fabric.Image(webcamEl, {
  left: 539,
  top: 328,
  angle: 94.5,
  originX: 'center',
  originY: 'center',
  objectCaching: false,
});

canvas.add(video1);
video1.getElement().play();

if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {

    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}


// adding webcam video element
navigator.mediaDevices.getUserMedia({video: true})
  .then(function getWebcamAllowed(localMediaStream) {
    webcamEl.srcObject = localMediaStream;

    canvas.add(webcam);
    webcam.moveTo(0); // move webcam element to back of zIndex stack
    webcam.getElement().play();
  }).catch(function getWebcamNotAllowed(e) {
  // block will be hit if user selects "no" for browser "allow webcam access" prompt
  });

fabric.util.requestAnimFrame(function render() {
  canvas.renderAll();
  fabric.util.requestAnimFrame(render);
});