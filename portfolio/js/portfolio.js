
var navOpen = false;

function slide() {
  navOpen = !navOpen
  var slider = document.getElementById('sidebar-nav');
  var buttonSlider = document.getElementById("button");

  console.log('hello');
  if(navOpen){
    slider.className = "sidebar-nav sidebar-hidden"
    buttonSlider.className = "button-hidden"
  
  } else {
    slider.className = "sidebar-nav"
    buttonSlider.className = ""
  }
}
