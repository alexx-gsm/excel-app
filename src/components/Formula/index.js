import ExcelComponent from '@core/ExcelComponent'

class Formula extends ExcelComponent {
  static className = 'formula'

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}

export default Formula
