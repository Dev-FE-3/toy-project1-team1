export default class Support {
  constructor(options) {
    const { title = "Page Title" } = options;

    this.title = title;
  }

  render() {
    return `
      <h1>${this.title}</h1>
      <p>도움이 필요하면 연락하세요!</p>
    `;
  }
}
