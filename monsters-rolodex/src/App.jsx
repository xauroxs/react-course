import { Component } from "react";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
