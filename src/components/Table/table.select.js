import {$} from '@/utils/dom'

const CELL_SEPARATOR = ':'

function selectHandler($root, selection, event) {
  const $cell = $(event.target)

  if(event.shiftKey) {
    const $cells = getCells(selection.current, $cell)
    selection.selectGroup($cells)
  } else if(event.ctrlKey) {
    selection.toogleCell($cell)
  } else {
    selection.selectCell($cell)
  }

  function getCells($currentCell, $selectedCell) {
    const [currentRow, currentColumn] = splitCell($currentCell)
    const [selectedRow, selectedColumn] = splitCell($selectedCell)

    const [startRow, endRow] = getBounds(Number(currentRow), Number(selectedRow))
    const [startColumn, endColumn] = getBounds(Number(currentColumn), Number(selectedColumn))

    const $cells = []

    for(let row = startRow; row <= endRow; row++) {
      for(let column = startColumn; column <= endColumn; column++) {
        const $cell = $root.find(`[data-cell="${row}${CELL_SEPARATOR}${column}"]`)
        $cells.push($cell)
      }
    }

    return $cells
  }

  function splitCell($cell) {
    return $cell.data.cell.split(CELL_SEPARATOR)
  }

  function getBounds(first, second) {
    return first < second
      ? [first, second]
      : [second, first]
  }
}

export default selectHandler
