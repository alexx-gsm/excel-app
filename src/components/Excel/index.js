import {$} from '@/utils/dom'

class Excel {
  static className = 'excel'

  constructor(selector, options) {
    this.$root = $(selector)
    this.components = options?.components || []
  }

  renderComponent(Component) {
    const $wrap = $.create('div', Component.className)
    const component = new Component($wrap)
    $wrap.html(component.toHTML())

    return $wrap
  }

  renderApp() {
    const $app = $.create('div', Excel.className)

    this.components.forEach((Component) => {
      const $component = this.renderComponent(Component)
      $app.append($component)
    })

    return $app
  }

  render() {
    this.$root.append(this.renderApp())
  }
}

export default Excel
