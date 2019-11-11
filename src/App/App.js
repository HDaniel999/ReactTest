import React, { Component } from 'react'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import FirebaseAdapter from '../modules/FirebaseAdapter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticateUser } from '../store/actions'

const HomePageWrapper = () => (<HomePage title='Pagina principa' />)

const authFirebase = FirebaseAdapter.getAuth()
class App extends Component {
  componentDidMount () {
    this.unSuscribe = authFirebase().onAuthStateChanged((auth) => {
      const action = authenticateUser(auth)
      this.props.dispatch(action)
    })
  }

  componentWillUnmount () {
    this.unSuscribe()
  }
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePageWrapper} />
          <Route path='/about' component={AboutPage} />
          <Route path='/:anything' component={AboutPage} />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App)