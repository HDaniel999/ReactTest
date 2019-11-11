import React from 'react'
import './Modal.css'
function Modal (props) {
  if (!props.open) {
    return null
  }
  return (
    <div>
      <div className='modal-background' />
      <div role='dialog' className='modal-dialog'>
        <header className='modal-dialog-header'>
          <span>{props.header}</span>
          <button
            onClick={props.onClose}
            type='button'
            aria-label='close'
            className='modal-dialog-header--button'>
              CLOSE
          </button>
        </header>
        <div className='modal-content'>{props.children}</div>
      </div>
    </div>
  )
}

export default Modal