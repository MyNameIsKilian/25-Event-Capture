const divs = document.querySelectorAll('div');

const myFunc = (e) => {
  console.log(e.target.classList.value)
  e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', myFunc, {
  capture: false,
  once: true
}));
