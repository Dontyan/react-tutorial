import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";

const characters = [
  {
    name: "ゴン",
    job: "強化系",
    age: 12
  },
  {
    name: "キルア",
    job: "変化形",
    age: 12
  },
  {
    name: "クラピカ",
    job: "特殊系",
    age: 18
  },
  {
    name: "レオリオ",
    job: "放出系",
    age: 20
  },

  {
    name: "ネテロ",
    job: "ハンター協会会長",
    age: "超じじい"
  },

  {
    name: "ゼノ",
    job: "一日一殺",
    age: "じじい"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters };
  }

  render() {
    return (
      <div className="App">
        <Table
          characterData={this.state.characters}
          removeCharacter={index => {
            this.removeCharacter(index);
          }}
        />
        Hello aaaaaaaa
      </div>
    );
  }

  removeCharacter(index) {
    const characters = this.state.characters.filter((_, i) => i !== index);
    this.setState({ characters });
  }
}

export default App;
