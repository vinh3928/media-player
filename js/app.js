var playOn = document.getElementsByClassName("fa")
var headerText = document.getElementById("header-text")
var song = document.getElementsByClassName("song")

playOn[0].addEventListener("click", function() {
  for (var i = 0; i < playOn.length; i ++) {
    if (playOn[i].classList.contains("fa-stop")) {
      if (playOn[0] === playOn[i]) {
      } else {
        playOn[i].classList.toggle("fa-stop");
        song[i].pause();
        headerText.innerHTML = "Select a Song!";
      }
    }
  }

  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a Song!") {
    headerText.innerHTML = "Now Playing: Favorite Food";
  } else {
    headerText.innerHTML = "Select a Song!"
  }
  if (song[0].paused) {
    song[0].play();
  } else {
    song[0].pause();
  }
});

playOn[1].addEventListener("click", function() {
  for (var i = 0; i < playOn.length; i ++) {
    if (playOn[i].classList.contains("fa-stop")) {
      if (playOn[1] === playOn[i]) {
      } else {
        playOn[i].classList.toggle("fa-stop");
        song[i].pause();
        headerText.innerHTML = "Select a Song!";
      }
    }
  }

  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a Song!") {
    headerText.innerHTML = "Now Playing: Thrill of the Hunt";
  } else {
    headerText.innerHTML = "Select a Song!"
  }
  if (song[1].paused) {
    song[1].play();
  } else {
    song[1].pause();
  }
});

playOn[2].addEventListener("click", function() {
  for (var i = 0; i < playOn.length; i ++) {
    if (playOn[i].classList.contains("fa-stop")) {
      if (playOn[2] === playOn[i]) {
      } else {
        playOn[i].classList.toggle("fa-stop");
        song[i].pause();
        headerText.innerHTML = "Select a Song!";
      }
    }
  }

  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a Song!") {
    headerText.innerHTML = "Now Playing: Transgender Dysphoria";
  } else {
    headerText.innerHTML = "Select a Song!"
  }
  if (song[2].paused) {
    song[2].play();
  } else {
    song[2].pause();
  }
});

playOn[3].addEventListener("click", function() {
  for (var i = 0; i < playOn.length; i ++) {
    if (playOn[i].classList.contains("fa-stop")) {
      if (playOn[3] === playOn[i]) {
      } else {
        playOn[i].classList.toggle("fa-stop");
        song[i].pause();
        headerText.innerHTML = "Select a Song!";
      }
    }
  }

  this.classList.toggle("fa-stop")
  if (headerText.innerHTML === "Select a Song!") {
    headerText.innerHTML = "Now Playing: Where I'm From" ;
  } else {
    headerText.innerHTML = "Select a Song!"
  }
  if (song[3].paused) {
    song[3].play();
  } else {
    song[3].pause();
  }
});

