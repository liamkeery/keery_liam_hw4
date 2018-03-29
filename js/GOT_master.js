(() => {
console.log('Javascript firing');

String.prototype.capIt = function() {
  return this.replace(this.charAt(), this.charAt().toUpperCase());
}

let sigils = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
vidPlayer = document.querySelector('video');
vidControls = document.querySelector('.controls');
imageBanner = document.querySelector('#houseImages');

function showHouseVideo() {
  let houseName = this.className.split(' ')[1].capIt();
  document.querySelector('h1').textContent = `House ${houseName}`;
  lightbox.classList.add('show-lightbox');
  // play video
  vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  vidPlayer.load();
  vidPlayer.play();


  scrollBanners(this.dataset.offset)
}

function scrollBanners(offset) {
  let moveIt = offset * 600 + "px";

  imageBanner.style.right = moveIt;
}

function closeLightBox() {
  lightbox.classList.remove('show-lightbox');
  // stop the video and rewind it to 0
  vidPlayer.pause();
  vidPlayer.currentTime = 0;
}

function pausePlay() {
  let theButton = this.firstElementChild;

  if (vidPlayer.paused == true) {
    vidPlayer.play();
    theButton.dataset.icon = "pause-circle";
  } else {
    vidPlayer.pause();
    theButton.dataset.icon = "play-circle";
  }
}

// event handling
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended', closeLightBox);
vidControls.addEventListener('click', pausePlay);
})();
