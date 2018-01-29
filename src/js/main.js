import '../css/cube.css'
import '../css/main.css'


const NavLinks = document.querySelectorAll('[rotate]')
const Cube = document.querySelector('#cube')
const Classes = ['front', 'back', 'left', 'right', 'top', 'bot']
const Colors = [
  '#4e4e56',
  '#da635d',
  '#dcd0c0',
  '#b1938b',
  '#2C2C54'
]


NavLinks.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()
  const side = el.getAttribute('rotate')

  for (let classe of Classes) Cube.classList.remove(classe)

  Cube.classList.add(side)
}))

