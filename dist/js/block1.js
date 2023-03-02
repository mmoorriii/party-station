let myImg = document.querySelector('#myImg')

window.addEventListener('resize', function () {
   if (window.innerWidth >= 900) {
      myImg.src = '../img/planet-1440.svg';
   } else {
      myImg.src = '../img/planet.svg';
   }
});