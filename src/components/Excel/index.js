import { $ } from '@/utils/dom'

class Excel {
  static className = 'excel'

  constructor(selector, options) {
    this.$root = $(selector)
    this.components = options?.components || []
  }

  initComponent = component => component.init()

  getApp() {
    const $app = $.create('div', Excel.className)

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // for debug
      console.log('component', component);
      if (component.name) {
        window['c' + component.name] = component
      }
      $el.html(component.toHTML())
      $app.append($el)

      return component
    })

    return $app
  }

  renderApp() {
    const app = this.getApp()
    this.$root.append(app)
  }

  initApp() {
    this.components.forEach(this.initComponent)
  }

  render() {
    this.renderApp()
    this.initApp()
  }
}

export default Excel
