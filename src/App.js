import React from 'react';
import './App.css';
import {firstName, lastName, middleName, otherName} from './myFile'
const doFilter = query => user => query === user.name
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    this.setState({ query: event.target.value })
  }
 
  render() {
    const users = [
      {name: 'AbdurRahmaan'},
      {name: 'Tobiloba'},
    ];

    return (
      <div>
        <ul>
          {
            users
              .filter(doFilter)
              .map(myUser => <li>{myUser.name}</li>)
          }
        </ul>
        <ol>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{middleName}</li>
          <li>{otherName}</li>
          {/* <li>{firstName}</li> */}
        </ol>
        <input type="text" onChange={this.onChange} />
      </div>
    )
  }
}


