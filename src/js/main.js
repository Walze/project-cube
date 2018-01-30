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
const CubeWrapper = document.querySelector('#wrapper')
const Cube = document.querySelector('#cube')

const Sides = document.querySelectorAll('.side-wrapper .side')

const SideWidth = Array.prototype.slice.call(Sides).reduce((prev, current) =>
  (prev.getBoundingClientRect().width > current.getBoundingClientRect().width) ? prev : current
).getBoundingClientRect().width

const SideHeight = Array.prototype.slice.call(Sides).reduce((prev, current) =>
  (prev.getBoundingClientRect().height > current.getBoundingClientRect().height) ? prev : current
).getBoundingClientRect().height

CubeWrapper.style.height = SideHeight + 'px'

NavLinks.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()

  const SideString = el.getAttribute('rotate')
  Cube.style.transform = Degrees.cube[SideString]

  const SideEl = document.querySelector(`#side-${SideString} .side`)
  CubeWrapper.style.height = SideEl.clientHeight + 'px'
}))



