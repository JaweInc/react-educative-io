import React from 'react';
import './App.css';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'hello',
    }
  }

  compomentDidMount() {
    fetch(API + DEFAULT_QUERY)
    .then(response => response.json())
    .then(data => this.setState({ title: data.hits[0].title }))
  }

  render() {
    return (
      <div>{this.state.title}</div>
    )
  }
}


