// Nav Bar Scroll FX

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector('#nav-toggle-open');
const closeNavBtn = document.querySelector('#nav-toggle-close');


const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';

}
openNavBtn.addEventListener('click', openNav);


const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';

}
closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024) {
  nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
  })

}


var videoPlayer = document.getElementById("videoPlayer");
var reelsVideo = document.getElementById("reelsVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
  reelsVideo.muted = true;
}

function playVideo(file) {
  reelsVideo.src = file;
  videoPlayer.style.display = "block";
  reelsVideo.muted = false;
  
}

