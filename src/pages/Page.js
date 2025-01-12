export default class Page {
  constructor(container, contents) {
    this.container = document.querySelector(container)
    this.contents = contents
  }

  render() {
    this.container.innerHTML = this.contents
  }
}
