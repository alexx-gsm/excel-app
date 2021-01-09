import {$} from '@/utils/dom'
import debounce from '@/utils/debounce'

const DEBOUNCE_DELTA = 100;

function resizeHandler($root, event) {
  const resize = event.target.dataset.resize
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()

  const {column} = $parent.data
  const columns = $root.findAll(`[data-column="${column}"]`)

  let width = ''
  let height = ''

  document.onmousemove = debounce(e => {
    if(resize === 'col') {
      const delta = e.pageX - coords.right
      width = coords.width + delta + 'px'
      $resizer.css({right: -delta + 'px'})
    } else {
      const delta = e.pageY - coords.bottom
      height = coords.height + delta + 'px'
      $resizer.css({bottom: -delta + 'px'})
    }

    $resizer.addClass('is-visible')
  }, DEBOUNCE_DELTA)

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null

    if(resize === 'col') {
      $parent.css({width})
      columns.forEach($el => $el.css({width}))
      $resizer.css({right: 0})
    } else {
      $parent.css({height})
      $resizer.css({bottom: 0})
    }

    $resizer.removeClass('is-visible')
  }
}

export default resizeHandler
