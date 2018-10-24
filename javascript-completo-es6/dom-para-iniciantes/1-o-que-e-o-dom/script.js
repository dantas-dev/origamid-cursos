const href = window.location.href;
// alert(href);

const h1Select = document.querySelector('h1');

h1Select.click(function () {
  alert('click');
});

console.log(
  h1Select.classList,
  h1Select.classList[0],
  h1Select.classList[1],
  h1Select.offsetLeft
);

h1Select.addEventListener('click', function () {
  if(this.classList[this.classList.length - 1] === 'red') {
    this.classList.remove('red');
    console.log('remove class red');
  }  else {
    this.classList.add('red');
    console.log('add class red');
  }
});

/* Questions */
// 1
function returnURL() {
  return window.location.href;
}

// 2
const isActive = document.querySelector('.ativo');

// 3
const language = window.navigator.language;
console.log(language);

// 4
const windowSize = window.innerWidth;
console.log(windowSize);
