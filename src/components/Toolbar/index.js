import ExcelComponent from '@core/ExcelComponent'

class Toolbar extends ExcelComponent {
  static className = 'toolbar'

  toHTML() {
    return `
      <button class="button">
        <svg class="bi" width="16" height="16" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#type-bold" />
        </svg>
      </button>
      <button class="button">
        <svg class="bi" width="16" height="16" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#type-italic" />
        </svg>
      </button>
      <button class="button">
        <svg class="bi" width="16" height="16" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#type-underline" />
        </svg>
      </button>
      <button class="button">
        <svg class="bi" width="16" height="16" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#type-strikethrough" />
        </svg>
      </button>
      <button class="button">
        <svg class="bi" width="16" height="16" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#text-left" />
        </svg>
      </button>
      <button class="button">
        <svg class="bi" width="16" height="16" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#text-center" />
        </svg>
      </button>
      <button class="button">
        <svg class="bi" width="16" height="16" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#text-right" />
        </svg>
      </button>
    `
  }
}

export default Toolbar
