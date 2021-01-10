class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null

    this.addCell = this.addCell.bind(this)
    this.clearCell = this.clearCell.bind(this)
  }

  selectCell($el) {
    this.clearCell(this.current)
    this.clearAll()
    this.current = $el.addClass(TableSelection.className)
  }

  selectGroup($cells) {
    const $arrCells = Array.from($cells)
    $arrCells.forEach(this.addCell)
  }

  addCell($el) {
    this.group.push($el)
    $el.addClass(TableSelection.className)
  }

  toogleCell($el) {
    this.group.push($el)
    $el.toogleClass(TableSelection.className)
  }

  clearCell($el) {
    if($el) {
      $el.removeClass(TableSelection.className)
    }
  }

  clearAll() {
    this.group.forEach(this.clearCell)
    this.group = []
  }
}

export default TableSelection
