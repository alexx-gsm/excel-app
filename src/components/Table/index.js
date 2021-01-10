import ExcelComponent from '@core/ExcelComponent'
import createTable from './table.template'
import {shouldResize, shouldSelect} from './table.functions'
import resizeHandler from './table.resize'
import selectHandler from './table.select'
import TableSelection from './TableSelection'

class Table extends ExcelComponent {
  static className = 'table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })

    this.$root = $root
    this.selection = new TableSelection()

    this.onMousedown = this.onMousedown.bind(this)
  }

  init() {
    super.init()

    const $cell = this.$root.find(`[data-cell="0:0"]`)
    this.selection.selectCell($cell)
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if(shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
    if(shouldSelect(event)) {
      selectHandler(this.$root, this.selection, event)
    }
  }
}

export default Table
