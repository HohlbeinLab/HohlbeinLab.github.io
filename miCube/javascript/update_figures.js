
// Figure Exploded interactively loads static images, stored locally
function update_figure_exploded() {
  var period = document.getElementById("Figure_exploded_period_slider").value;
  var filename = "./images/miCube_exploded_animation/smallSize/exploded_" + period + ".png";
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
  var filename = "./images/miCube_rotated_animation/smallSize/rotated_" + id + ".png";
  var image = document.getElementById("Figure_rotated_image");
  image.src = filename;
}
