const css = document.querySelector('h3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')

// console.log(css)
// console.log(color1)
// console.log(color2)
// console.log(body)

function setGradient () {
  body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'
  css.textContent = body.style.background // adds the css code to the page
}

// no need to call the function, just enter the name of the function
color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

// function randomNumber () {
//   return Math.floor(Math.random() * 100)
// }
//
// console.log(randomNumber())
