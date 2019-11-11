import React, {Component} from 'react'
import Button from '../../dumps/Button/Button'
import FirebaseAdapter from '../../../modules/FirebaseAdapter'

const auth = FirebaseAdapter.getAuth()

export default class LoginButton extends Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login (event) {
    event.preventDefault()
    const provider = new auth.FacebookAuthProvider()
    auth().signInWithPopup(provider)
  }
  render () {
    return (<Button onClick={this.login}>Inicia sesión con facebook</Button>)
  }
}