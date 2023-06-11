// we wrap error compnents around other components to handle errors inside them
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) { //if an error is caught then componentDidCatch will run (this is a 'lifecycle' hook)
    // it takes the error object and the info object as arguments
    this.setState({  hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. That is not good</h1>
    }
    return this.props.children // as we are wrapping this errorBoundary component around the compnents we are checking, we simply return the children if there are no problems
  }

}

export default ErrorBoundary;