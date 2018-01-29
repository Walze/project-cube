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
window.cube = Cube
const SideWidth = Array.prototype.slice.call(SideWrappers).reduce((prev, current) =>
  (prev.getBoundingClientRect().width > current.getBoundingClientRect().width) ? prev : current
).getBoundingClientRect().width

const SidesDeg = {
  front: 'rotateY(0deg)',         /* Y */
  right: 'rotateY(-90deg)',     /* Y */
  left: 'rotateY(90deg)',     /* Y */
  back: 'rotateX(-180deg)', /* X */
  top: 'rotateX(-90deg)', /* X */
  bot: 'rotateX(90deg)' /* X */
}

NavLinks.forEach(el => el.addEventListener('click', e => {
  e.preventDefault()

  const Side = el.getAttribute('rotate')
  Cube.style.transform = SidesDeg[Side]

  const SideWrapper = document.querySelector(`#side-${Side}`)
  SideWrapper.style.transform += 'translateZ(' + SideWidth / 2 + 'px)'

  console.log()
}))



