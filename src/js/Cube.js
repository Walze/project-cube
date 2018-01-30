export class Cube {
  constructor(wrapper, rotatee, anchors) {
    this.anchors = anchors
    this.rotatee = rotatee
    this.wrapper = wrapper
    this.active = false
    this.degrees = {
      cube: {
        front: 'rotateY(0deg)',
        right: 'rotateY(-90deg)',
        left: 'rotateY(90deg)',
        back: 'rotateX(-180deg)',
        top: 'rotateX(-90deg)',
        bot: 'rotateX(90deg)'
      },
      sides: {
        front: 'rotateY(0deg)',
        right: 'rotateY(90deg)',
        left: 'rotateY(-90deg)',
        back: 'rotateX(180deg)',
        top: 'rotateX(90deg)',
        bot: 'rotateX(-90deg)'
      }
    }
  }

  listenClicks() {
    this.anchors.forEach(el => el.addEventListener('click', e => {
      e.preventDefault()

      if (this.active) {
        const SideString = el.getAttribute('rotate')

        this.rotate(SideString)
        this.fixHeight(SideString)
      }
    }))
  }

  rotate(side) {
    this.rotatee.style.transform = this.degrees.cube[side]
  }

  fixHeight(side) {
    const SideEl = document.querySelector(`#side-${side} .side`)
    this.wrapper.style.height = SideEl.clientHeight + 'px'
  }
}