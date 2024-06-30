function Ino(el: HTMLElement, {
  onShow,
  onHide
}: { onShow?: (el: HTMLElement) => void, onHide?: (el: HTMLElement) => void }) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        onShow && onShow(el)
      } else {
        onHide && onHide(el)
      }
    })
  }, {
    root: document
  })

  io.observe(el)

  return io
}

export default Ino