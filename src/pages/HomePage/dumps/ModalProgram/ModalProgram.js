import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../../../../components/dumps/Modal/Modal'

class ModalProgram extends React.Component {
  constructor (props) {
    super(props)
    this.modalRoot = document.getElementById('modal-container')
    this.modalContainer = document.createElement('div')
  }

  componentDidMount () {
    this.modalRoot.appendChild(this.modalContainer)
  }

  componentWillUnmount () {
    this.modalRoot.removeChild(this.modalContainer)
  }

  render () {
    return ReactDOM.createPortal(
      <Modal {...this.props} />,
      this.modalContainer
    )
  }
}

export default ModalProgram