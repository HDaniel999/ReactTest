import React, { Component } from 'react'
import FirebaseAdapter from '../../../modules/FirebaseAdapter'
import LoginButton from '../../smarts/LoginButton/LoginButton'

const authFirebase = FirebaseAdapter.getAuth()

class ProtectComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  componentDidMount () {
    this.unSuscribe = authFirebase().onAuthStateChanged((auth) => {
      if (auth) {
        this.setState({ auth: true })
      } else {
        this.setState({ auth: false })
      }
    })
  }

  componentWillUnmount () {
    this.unSuscribe()
  }
  render () {
    if (this.state.auth) {
      return this.props.children
    }
    return (<LoginButton />)
  }
}

export default ProtectComponent