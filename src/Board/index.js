import './style.scss';
import Square from '../Square';
import { Component } from 'react';

export default class Board extends Component {

  state = {
    // 8 squares in board
    squares: Array.from(Array(9).keys()).map(e => <Square value={e} key={e} />)
  }

  render() {
    return (
      <div className="board">
        <div className="board__row">
          {this.state.squares.slice(0, 3)}
        </div>
        <div className="board__row">
          {this.state.squares.slice(3, 6)}
        </div>
        <div className="board__row">
          {this.state.squares.slice(6, 9)}
        </div>
      </div>
    )
  }

}