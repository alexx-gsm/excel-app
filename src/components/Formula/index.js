import ExcelComponent from '@core/ExcelComponent'

class Formula extends ExcelComponent {
  static className = 'formula'

  constructor($root) {

    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })

    this.onInput = this.onInput.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log(this.$root);
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  onClick() {
    console.log('click');
  }
}

export default Formula
