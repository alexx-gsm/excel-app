import ExcelComponent from '@core/ExcelComponent'

class Table extends ExcelComponent {
  static className = 'table'

  toHTML() {
    return `
      <div class="table-row">
        <div class="info"></div>
        <div class="data">
          <div class="column column-header">A</div>
          <div class="column column-header">B</div>
          <div class="column column-header">C</div>
          <div class="column column-header">A</div>
          <div class="column column-header">B</div>
          <div class="column column-header">C</div>
          <div class="column column-header">A</div>
          <div class="column column-header">B</div>
          <div class="column column-header">C</div>
          <div class="column column-header">A</div>
          <div class="column column-header">B</div>
          <div class="column column-header">C</div>
          <div class="column column-header">A</div>
          <div class="column column-header">B</div>
          <div class="column column-header">C</div>
          <div class="column column-header">A</div>
          <div class="column column-header">B</div>
          <div class="column column-header">C</div>
          <div class="column column-header">A</div>
          <div class="column column-header">B</div>
          <div class="column column-header">C</div>
        </div>
      </div>
      <div class="table-row">
        <div class="info">1</div>
        <div class="data">
          <div class="column" contenteditable></div>
          <div class="column" contenteditable></div>
          <div class="column" contenteditable></div>
        </div>
      </div>
      <div class="table-row">
        <div class="info">2</div>
        <div class="data">
          <div class="column" contenteditable></div>
          <div class="column selected" contenteditable></div>
          <div class="column" contenteditable></div>
        </div>
      </div>
      <div class="table-row">
        <div class="info">3</div>
        <div class="data">
          <div class="column" contenteditable></div>
          <div class="column" contenteditable></div>
          <div class="column" contenteditable></div>
        </div>
      </div>
    </div>
    `
  }
}

export default Table
