
// Figure Exploded interactively loads static images, stored locally
function update_figure_exploded() {
  var period = document.getElementById("Figure_exploded_period_slider").value;
  var filename = "./miCube/images/miCube_exploded_animation/smallSize/exploded_" + period + ".png";
  var image = document.getElementById("Figure_exploded_image");
  image.src = filename;
}
// Figure Rotated interactively loads static images, stored locally
function update_figure_rotated() {
  var period = document.getElementById("Figure_rotated_period_slider").value;
  var id = 0;
  if (period > 0){
	  id = period % 50;
  }else if (period < 0){
	  id = 50-Math.abs(period);
  }else{
	  id = 0;
  }
  var filename = "./miCube/images/miCube_rotated_animation/smallSize/rotated_" + id + ".png";
  var image = document.getElementById("Figure_rotated_image");
  image.src = filename;
}



// Figure 3 interactively loads static images.
// Check if our big images are available locally or remotely:
var big_image_directory = "./../big_images";
var img = new Image();
img.onerror = function() {
  window.big_image_directory = "https://andrewgyork.github.io/publication_template_data/big_images";
  img.onerror = function() {
    window.big_image_directory = "";
    img.onerror = "";
    window.alert("Interactive images not found.");
  }
  img.src = big_image_directory + "/figure_3/period_000004.svg"
}
img.onload = function() {
  console.log("Loading interactive images from: " + big_image_directory)
}
img.src = big_image_directory + "/figure_3/period_000004.svg"

function update_figure_3() {
  var period = document.getElementById("Figure_3_period").value;
  var filename = big_image_directory + "/figure_3/period_" + period + ".svg";
  var image = document.getElementById("Figure_3_image");
  image.src = filename;
}
