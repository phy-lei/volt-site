function Ino(el: HTMLElement, {
  onShow,
  onHide,
}: { onShow?: (el: Element) => void, onHide?: (el: Element) => void }) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        onShow && onShow(item.target)
      }
      else {
        onHide && onHide(item.target)
      }
    })
  }, {
    rootMargin: '-20%',
  })

  io.observe(el)

  return io
}

export default Ino
