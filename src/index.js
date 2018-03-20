window.highlight = (element) => {
  element.style.background = 'black';
  element.style.color = 'white';
}

window.h = window.highlight;

window.toggleClass = (element, className) => {
  if(element.classList.contains(className)){
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}
window.setPlayersStyle = () => {
  const players = document.querySelectorAll('li[data-type="player"]');
  const playersArr = Array.from(players);
  playersArr.forEach((el) => {
    el.style.background = 'green';
    el.style.color = 'white';
  });
}

window.setAliens = () => {
  const aliens = document.querySelectorAll('li[data-type="alien"]');
  const playersArr = Array.from(aliens);
  playersArr.forEach((el) => {
    el.style.background = 'orange';
    el.style.color = 'red';
  });
}

window.setAll = () => {
  window.setAliens();
  window.setPlayersStyle();
}

window.setWantedBgColor = (type,background) => {
  const elements = document.querySelectorAll('li[data-type="' + type + '"]');
  const elementsArr = Array.from(elements);
  elementsArr.forEach((el) => {
    el.style.background = background;
  });
}

window.setDifferent = () => {
  window.setWantedBgColor('player','red');
  window.setWantedBgColor('alien','black');
  window.setWantedBgColor('predator','orange');
  window.setWantedBgColor('other','green');
}



cloneHeader = () => {
  const body = document.querySelector('body');
  const hOne = document.querySelector('body > h1');
  const clon = hOne.cloneNode(true);
  const clon2 = hOne.cloneNode(true);
  body.insertBefore(clon,hOne);
  const last1 = document.querySelector('body').lastElementChild;
  body.insertBefore(clon2,last1);
}
