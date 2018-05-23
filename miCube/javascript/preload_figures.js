var images = [];
function loadExplodedImages() {
    for (var i = 0; i < 21; i++) {
        images[i] = new Image();
		var imsrc = './images/miCube_exploded_animation/smallSize/exploded_${i}.png';
		images[i].src = imsrc;
    }
}

var imagesr = [];
function loadRotatedImages() {
    for (var i = 0; i < 50; i++) {
        imagesr[i] = new Image();
		var imsrc = './images/miCube_rotated_animation/smallSize/rotated_${i}.png';
		imagesr[i].src = imsrc;
    }
}

