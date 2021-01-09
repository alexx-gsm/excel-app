const debounce = (cb, period) => {
  let isBusy = false

  return (e) => {
    if(isBusy) {
      return
    }
    isBusy = true
    setTimeout(() => {
      cb(e)
      isBusy = false
    }, period)

  }
}

export default debounce
