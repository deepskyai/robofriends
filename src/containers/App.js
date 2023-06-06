import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll'



class App extends React.Component {
  constructor () {
    super()
    this.state = { // pass imported things into the properties of the class you make (you establish state by ddeclaring properties in a class)
      robots: [],
      searchfield:''
    }
  }
  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({robots : users})});
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredrobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ? <h1>Loading</h1> :
      (
        <div className='tc f1'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredrobots}/>
          </Scroll>
          
        </div>
      ); // use this.state to pass properties into your components now that you have established state at the top of the class definition
    
  }
}

export default App;

// props are things that come out of state
// So a parent feeds state into a child component, as soon as the child component receives the state, it's a property
// that child can never change the property

