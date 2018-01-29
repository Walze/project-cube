const CSS = [
  'cube',
  'main',
  'nav'
]
for (let file of CSS) require(`../css/${file}.css`)

const Colors = [
  '#4e4e56',
  '#da635d',
  '#dcd0c0',
  '#b1938b',
  '#2C2C54'
]

const NavLinks = document.querySelectorAll('[rotate]')
const Cube = document.querySelector('#cube')
const Classes = {
  front: 0,
  back: -180,
  right: -90,
  left: 90,
  top: -90,
  bot: 90
}

NavLinks.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()
  const side = el.getAttribute('rotate')

  for (let classe in Classes) Cube.classList.remove(classe)

  Cube.classList.add(side)
}))

