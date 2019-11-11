import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalProgram from '../dumps/ModalProgram/ModalProgram'
import FormSuscription from '../dumps/FormSuscription/FormSuscription'
import ProtectComponent from '../../../components/dumps/ProtectComponent/ProtectComponent'
import Button from '../../../components/dumps/Button/Button'
import { setSelectedProgram } from '../../../store/actions'
export class ModalProgramToSuscription extends Component {
  constructor (props) {
    super(props)
    this.state = { email: '' }
    this._closeModal = this._closeModal.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  _closeModal () {
    const action = setSelectedProgram(null)
    this.props.dispatch(action)
  }

  changeInput (event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render () {
    const { selected } = this.props
    if (!selected) {
      return null
    }
    return (
      <ModalProgram
        header={selected.name} open onClose={this._closeModal}>
        <FormSuscription email={this.state.email} onChange={this.changeInput} />
        <ProtectComponent>
          <Button>Submit</Button>
        </ProtectComponent>
      </ModalProgram>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    selected: state.home.selectedProgram
  }
}

export default connect(mapStateToProps)(ModalProgramToSuscription)