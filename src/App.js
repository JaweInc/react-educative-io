import React from 'react';
import './App.css';
import axios from 'axios'
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
    }
  }

  compomentDidMount() {
    axios('https://api.mydomain.com')
    .then(data => this.setState({ data }))
  }

  render() {
    return (
      <div>{this.state.title}</div>
    )
  }
}


