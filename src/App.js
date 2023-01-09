import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './componens/card-list/card-list.component';
import { SearchFiled } from './componens/search-field/search-field.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      search: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const {monsters, search}= this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(search.toLowerCase()))
    const handlechange = (e) => {
      this.setState({search: e.target.value})
    }
    return (
     <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchFiled placeholder= {'search monsters'} handlechange= {handlechange}/>
      <CardList monsters= {filteredMonsters}/>
     </div>
    );
  }
}

export default App;
