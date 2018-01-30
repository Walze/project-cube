export class CSS {
  constructor(array) {
    for (let file of array) require(`../css/${file}.css`)
  }
}