import React, { Component } from 'react'
import Page from '../../components/dumps/Page/Page'
import Cover from '../../components/dumps/Cover/Cover'
import FormSuscription from './dumps/FormSuscription/FormSuscription'
import SectionPrograms from './dumps/SectionPrograms/SectionPrograms'
import ModalProgramToSuscription from './smarts/ModalProgramToSuscription'
import { connect } from 'react-redux'
import { setSelectedProgram, fetchPrograms } from '../../store/actions'
export class HomePage extends Component {
  constructor (props) {
    super(props)
    this.clickProgram = this.clickProgram.bind(this)
  }

  clickProgram (program) {
    const action = setSelectedProgram(program)
    this.props.dispatch(action)
  }

  componentDidMount () {
    const action = fetchPrograms()
    this.props.dispatch(action)
  }
  render () {
    return (
      <Page>
        <Cover src='https://centraal.academy/images/cover-images/homepage__cover.jpg' />
        <SectionPrograms programs={this.props.programs} onClick={this.clickProgram} />
        <ModalProgramToSuscription />
        <FormSuscription></FormSuscription>
      </Page>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    programs: state.home.programs
  }
}

export default connect(mapStateToProps)(HomePage)