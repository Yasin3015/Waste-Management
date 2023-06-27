var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
  window.open("https://www.r4m.co/wp-content/uploads/2021/09/R4_sottotitoli-ENG.mp4?19909", "_blanck");
});

function myFunction(media) {
  if (media.matches) { 
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach((l) => {
        l.onclick = function(){
          new bootstrap.Collapse(document.getElementById('navbarSupportedContent')).Collapse()
        }
    })
  }
}

var media = window.matchMedia("(max-width: 992px)")
myFunction(media)
media.addListener(myFunction)
