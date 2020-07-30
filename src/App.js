import React, {Component} from 'react';

import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        // same as
        // const monsters = this.state.monsters;
        // const searchField = this.state.searchField
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter( monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder= 'search monsters'
                    handleChange={e => this.setState({searchField: e.target.value})}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
