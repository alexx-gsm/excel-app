import { capitalize } from "@/utils/capitalize";

class DomListener {
  constructor($root, listeners) {
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = this[getMethodName(listener)]
      this.$root.on(listener, method)
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = this[getMethodName(listener)]
      this.$root.off(listener, method)
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

export default DomListener
