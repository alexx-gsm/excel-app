class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if(typeof html === 'string') {
      this.$el.innerHTML = html

      return this
    }

    return this.$el.outerHTML
  }

  clear() {
    this.html('')

    return this
  }

  append(node) {
    this.$el.append(node.$el ?? node)

    return this
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb)
  }

  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb)
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  findAll(selector) {
    const items = this.$el.querySelectorAll(selector)
    return Array.from(items).map(el => $(el))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  css(styles = {}) {
    Object
      .keys(styles)
      .forEach(key => this.$el.style[key] = styles[key])

    return this
  }

  hasClass(className) {
    return this.$el.classList.contains(className)
  }

  addClass(className) {
    if(!this.hasClass(className)) {
      this.$el.classList.add(className)
    }

    return this
  }

  removeClass(className) {
    if(this.hasClass(className)) {
      this.$el.classList.remove(className)
    }

    return this
  }

  toogleClass(className) {
    this.$el.classList.toggle(className)

    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, className) => {
  const el = document.createElement(tagName)
  if(className) {
    el.classList.add(className)
  }

  return $(el)
}
