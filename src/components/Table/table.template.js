const CODES = {
  A: 65,
  Z: 90
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i)
}

function createHeaderCell(char) {
  return `<div class="column column-header">${char}</div>`
}

function createCell() {
  return `<div class="column" contenteditable></div>`
}

function createRow(renderCell, index) {
  const content = Array(CODES.Z - CODES.A + 1)
    .fill()
    .map(toChar)
    .map(renderCell)
    .join('')

  return `
    <div class="table-row">
      <div class="info">${index ?? ''}</div>
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
