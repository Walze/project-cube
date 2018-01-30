import { Cube } from './Cube'

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
const RotateeWrapper = document.querySelector('#wrapper')
const Rotatee = document.querySelector('#cube')
const Sides = document.querySelectorAll('.side-wrapper .side')

const SideWidth = Array.prototype.slice.call(Sides).reduce((prev, current) =>
  (prev.getBoundingClientRect().width > current.getBoundingClientRect().width) ? prev : current
).getBoundingClientRect().width

const SideHeight = Array.prototype.slice.call(Sides).reduce((prev, current) =>
  (prev.getBoundingClientRect().height > current.getBoundingClientRect().height) ? prev : current
).getBoundingClientRect().height

RotateeWrapper.style.height = SideHeight + 'px'


const Rotator = new Cube(RotateeWrapper, Rotatee, NavLinks)
Rotator.active = true
Rotator.listenClicks()
