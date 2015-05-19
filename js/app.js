var playOn = document.getElementsByClassName("fa")
var headerText = document.getElementById("header-text")
var song = document.getElementsByClassName("song")

var switchPlay = function() {
  for (var i = 0; i < playOn.length; i ++) {
    if (playOn[i].classList.contains("fa-stop")) {
      if (this === playOn[i]) {
      } else {
        playOn[i].classList.toggle("fa-stop");
        song[i].pause();
        headerText.innerHTML = "Select a song!";
      }
    }
  }
}

playOn[0].addEventListener("click", function() {
  switchPlay();
  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a song!") {
    headerText.innerHTML = "Now Playing: Favorite Food";
  } else {
    headerText.innerHTML = "Select a song!"
  }
  if (song[0].paused) {
    song[0].play();
  } else {
    song[0].pause();
  }
});

playOn[1].addEventListener("click", function() {
  switchPlay();
  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a song!") {
    headerText.innerHTML = "Now Playing: Thrill of the Hunt";
  } else {
    headerText.innerHTML = "Select a song!"
  }
  if (song[1].paused) {
    song[1].play();
  } else {
    song[1].pause();
  }
});

playOn[2].addEventListener("click", function() {
  switchPlay();
  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a song!") {
    headerText.innerHTML = "Now Playing: Transgender Dysphoria";
  } else {
    headerText.innerHTML = "Select a song!"
  }
  if (song[2].paused) {
    song[2].play();
  } else {
    song[2].pause();
  }
});

playOn[3].addEventListener("click", function() {

  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a song!") {
    headerText.innerHTML = "Now Playing: Where I'm From" ;
  } else {
    headerText.innerHTML = "Select a song!"
  }
  if (song[3].paused) {
    song[3].play();
  } else {
    song[3].pause();
  }
});

song[0].addEventListener("ended" , function() {
  playOn[0].classList.toggle("fa-stop");
  song[1].play();
  playOn[1].classList.toggle("fa-stop");
  headerText.innerHTML = "Now Playing: Thrill of the Hunt";
});

song[1].addEventListener("ended" , function() {
  playOn[1].classList.toggle("fa-stop");
  song[2].play();
  playOn[2].classList.toggle("fa-stop");
  headerText.innerHTML = "Now Playing: Transgender Dysphoria";
});

song[2].addEventListener("ended" , function() {
  playOn[2].classList.toggle("fa-stop");
  song[3].play();
  playOn[3].classList.toggle("fa-stop");
  headerText.innerHTML = "Now Playing: Where I'm From";
});

song[3].addEventListener("ended" , function() {
  playOn[3].classList.toggle("fa-stop");
  song[0].play();
  playOn[0].classList.toggle("fa-stop");
  headerText.innerHTML = "Now Playing: Favorite Food";
});
