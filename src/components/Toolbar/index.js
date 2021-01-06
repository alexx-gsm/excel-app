import ExcelComponent from '@core/ExcelComponent'

class Toolbar extends ExcelComponent {
  static className = 'toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })

    this.onClick = this.onClick.bind(this)
  }

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

  onClick(event) {
    console.log('--- button click');
    console.log('--- target: ', event.target);
  }
}

export default Toolbar
