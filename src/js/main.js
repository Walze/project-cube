import { Cube } from './Cube'
import { CSS } from './CSS'

new CSS([
  'cube',
  'main',
  'nav'
])

const Colors = [
  '#4e4e56',
  '#da635d',
  '#dcd0c0',
  '#b1938b',
  '#2C2C54'
]

const NavLinks = document.querySelectorAll('[rotate]')
const RotateeWrapper = document.querySelector('#wrapper')
const Rotatee = document.querySelector('#cube')
const Sides = document.querySelectorAll('.side-wrapper .side')

const SideWidthMax = Array.prototype.slice.call(Sides).reduce((prev, current) =>
  (prev.getBoundingClientRect().width > current.getBoundingClientRect().width) ? prev : current
).getBoundingClientRect().width

const SideHeightMax = Array.prototype.slice.call(Sides).reduce((prev, current) =>
  (prev.getBoundingClientRect().height > current.getBoundingClientRect().height) ? prev : current
).getBoundingClientRect().height

RotateeWrapper.style.height = SideHeightMax + 'px'


const Rotator1 = new Cube(RotateeWrapper, Rotatee, NavLinks)
Rotator1.active = true
Rotator1.listenClicks()
