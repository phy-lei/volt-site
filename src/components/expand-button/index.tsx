import { createSignal } from 'solid-js'
import type { Component } from 'solid-js'
import './style.css'

interface ExpandButtonProps {
  onChange: (flag: 'expand' | 'fold') => void
}

const ExpandButton: Component<ExpandButtonProps> = (props) => {
  const [expand, setExpand] = createSignal(false)

  const handleClick = () => {
    if (expand()) {
      props.onChange('fold')
    }
    else {
      props.onChange('expand')
    }
    setExpand(!expand())
  }

  return (
    <div
      class="expand-button"
      classList={{ 'expand-button-close': expand() }}
      onClick={handleClick}
    >
      <span />
      <span />
      <span />
    </div>
  )
}

export default ExpandButton
