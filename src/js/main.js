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

const NavLinks = document.querySelectorAll('[rotate]')
const Cube = document.querySelector('#cube')
const SideWrappers = document.querySelectorAll('.side-wrapper')

const SideWidth = Array.prototype.slice.call(SideWrappers).reduce((prev, current) =>
  (prev.getBoundingClientRect().width > current.getBoundingClientRect().width) ? prev : current
).getBoundingClientRect().width

const SideHeight = Array.prototype.slice.call(SideWrappers).reduce((prev, current) =>
  (prev.getBoundingClientRect().height > current.getBoundingClientRect().height) ? prev : current
).getBoundingClientRect().height

NavLinks.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()

  const Side = el.getAttribute('rotate')
  Cube.style.transform = Degrees.cube[Side]

}))



