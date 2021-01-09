const CODES = {
  A: 65,
  Z: 90
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i)
}

function createHeaderCell(char) {
  return `
    <div class="column column-header" data-type="resizable" data-column="col-${char}">
      ${char}
      <div class="resize-marker" data-resize="col"></div>
    </div>
  `
}

function createCell(char) {
  return `<div class="column" contenteditable data-column="col-${char}"></div>`
}

function createRow(renderCell, index) {
  const content = Array(CODES.Z - CODES.A + 1)
    .fill()
    .map(toChar)
    .map(renderCell)
    .join('')

  return `
    <div class="table-row" data-type="resizable">
      <div class="info">
        ${index ?? ''}
        ${index > 0 ? '<div class="resize-marker" data-resize="row"></div>' : ''}
      </div>
      <div class="data">${content ?? ''}</div>
    </div>
  `
}

function createTableHeader() {
  return createRow(createHeaderCell)
}

function createTableBody(rowsCount) {
  return Array(rowsCount)
    .fill()
    .map((_, i) => createRow(createCell, i + 1))
    .join('')
}

function createTable(rowsCount = 15) {
  return [
    createTableHeader(),
    createTableBody(rowsCount)
  ].join('')
}

export default createTable
