import ExcelComponent from '@core/ExcelComponent'

class Header extends ExcelComponent {
  static className = 'header'

  toHTML() {
    return `
      <input
        type="text"
        class="form-control"
        placeholder="Table name"
        aria-label="TableName"
        aria-describedby="basic-addon1"
      />
      <div class="header-buttons">
        <button type="button" class="btn btn-secondary btn-danger">delete</button>
        <button type="button" class="btn btn-outline-primary btn-outline-danger">logout</button>
      </div>
    `
  }
}

export default Header
