import ExcelComponent from '@core/ExcelComponent'
import createTable from './table.template'
import {shouldResize} from './table.functions'
import resizeHandler from './table.resize'

class Table extends ExcelComponent {
  static className = 'table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mouseup']
    })

    this.$root = $root

    this.onMousedown = this.onMousedown.bind(this)
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if(shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}

export default Table
