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
const SideWrappers = document.querySelectorAll('.side-wrapper')

//testing
window.cube = Cube

const SideWidth = Array.prototype.slice.call(SideWrappers).reduce((prev, current) =>
  (prev.getBoundingClientRect().width > current.getBoundingClientRect().width) ? prev : current
).getBoundingClientRect().width

const SideHeight = Array.prototype.slice.call(SideWrappers).reduce((prev, current) =>
  (prev.getBoundingClientRect().height > current.getBoundingClientRect().height) ? prev : current
).getBoundingClientRect().height

const Degrees = {
  cube: {
    front: 'rotateY(0deg)',         /* Y */
    right: 'rotateY(-90deg)',     /* Y */
    left: 'rotateY(90deg)',     /* Y */
    back: 'rotateX(-180deg)', /* X */
    top: 'rotateX(-90deg)', /* X */
    bot: 'rotateX(90deg)' /* X */
  },
  sides: {
    front: 'rotateY(0deg)',          /* Y */
    right: 'rotateY(90deg)',       /* Y */
    left: 'rotateY(-90deg)',     /* Y */
    back: 'rotateX(180deg)',   /* X */
    top: 'rotateX(90deg)',   /* X */
    bot: 'rotateX(-90deg)' /* X */
  }
}

//SideWrappers.forEach(el => el.style.minHeight = SideHeight + 'px')

NavLinks.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()

  const Side = el.getAttribute('rotate')
  Cube.style.transform = Degrees.cube[Side]

  if (Side == 'back')
    Cube.style.top = SideHeight + 'px'
  else
    Cube.style.top = '0'

  console.log(SideHeight, SideWidth)
}))



