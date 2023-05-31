const pelota = document.querySelector('.pelota');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const parar = document.querySelector('#stop');
const reverse = document.querySelector('#reverse');

play.addEventListener('click', () => {
  pelota.style.animationPlayState = 'running';

  if (pelota.className === 'pelota reverse') {
    pelota.classList.remove('reverse');
    pelota.classList.add('play');
  } else if (pelota.className === 'pelota') {
    pelota.classList.add('play');
  }
});

reverse.addEventListener('click', () => {
  pelota.style.animationPlayState = 'running';

  if (pelota.className === 'pelota play') {
    pelota.classList.remove('play');
    pelota.classList.add('reverse');
  }
});

pause.addEventListener('click', () => {
  pelota.style.animationPlayState = 'paused';
});

parar.addEventListener('click', () => {
  pelota.classList.remove('play');
  pelota.classList.remove('reverse');
});
