import './style.scss';
import Board from '../Board';
import { Component } from 'react';

export default class Game extends Component {

  render() {
    return (
      <div className="game">
        <h1>Morpion avec React v17</h1>
        <Board />
      </div>
    )
  }
}
