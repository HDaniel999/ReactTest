import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
  }

  componentDidCatch () {
    this.setState({ error: true })
  }

  render () {
    if (this.state.error) {
      return (<span>Oops I did't again</span>)
    }
    return this.props.children
  }
}
export default ErrorBoundary