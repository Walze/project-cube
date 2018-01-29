import '../css/main.css'


const NavLinks = document.querySelectorAll('[rotate]')
const Cube = document.querySelector('#cube')
const Classes = ['front', 'back', 'left', 'right', 'top', 'bot']

NavLinks.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()
  const side = el.getAttribute('rotate')

  for (let classe of Classes) Cube.classList.remove(classe)

  Cube.classList.add(side)
}))

