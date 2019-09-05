import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>age</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const { characterData, removeCharacter } = props;
  const rows = props.characterData.map((chara, i) => {
    return (
      <tr key={i}>
        <td>{chara.name}</td>
        <td>{chara.job}</td>
        <td>{chara.age}</td>
        <td>
          <button
            onClick={() => {
              removeCharacter(i);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
