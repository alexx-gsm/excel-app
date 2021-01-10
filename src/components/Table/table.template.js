const CODES = {
  A: 65,
  Z: 90
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i)
}

function createHeaderCell(char, _rowIndex, columnIndex) {
  return `<div class="column column-header"
               data-type="resizable"
               data-column="${columnIndex}">
            ${char}
            <div class="resize-marker" data-resize="col"></div>
          </div>`
}

function createCell(_char, rowIndex, columnIndex) {
  return `<div class="column"
               contenteditable
               data-cell="${rowIndex}:${columnIndex}"
               data-column="${columnIndex}"></div>`
}

function createRow(renderCell) {
  return function (_, rowIndex) {
    const content = Array(CODES.Z - CODES.A + 1)
      .fill()
      .map(toChar)
      .map((char, columnIndex) => renderCell(char, rowIndex, columnIndex))
      .join('')

    return `
      <div class="table-row" data-type="resizable">
        <div class="info">
          ${rowIndex >= 0 ? rowIndex + 1 : ''}
          ${rowIndex >= 0 ? '<div class="resize-marker" data-resize="row"></div>' : ''}
        </div>
        <div class="data">${content ?? ''}</div>
      </div>
    `
  }
}

function createTableHeader() {
  // TODO: refactor self-called function
  return createRow(createHeaderCell)()
}

function createTableBody(rowsCount) {
  return Array(rowsCount)
    .fill()
    .map(createRow(createCell))
    .join('')
}

function createTable(rowsCount = 15) {
  return [
    createTableHeader(),
    createTableBody(rowsCount)
  ].join('')
}

export default createTable
