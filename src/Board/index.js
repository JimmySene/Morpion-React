import './style.scss';
import Square from '../Square';
import { Component } from 'react';

export default class Board extends Component {

  constructor() {
    super();
    this.state = {
      // null in all squares when game starts. Then O or X
      values: Array(9).fill(null),
      // O or X. O player starts the game
      player: 'O'
    }
  }

  /**
   * Draw the square number i
   * @param {Number} i 
   * @returns {ReactElement}
   */
  renderSquare(i) {
    return (
      <Square value={this.state.values[i]} drawInSquare={() => this.drawInSquare(i)} />
    )
  }

  /**
   * Draw O or X in square number i and change player for the next turn
   * @param {Number} i 
   */
  drawInSquare = (i) => {
    const values = this.state.values.slice();
    // if already checked don't change the value, same if there is a winner
    if (values[i] || this.checkWinner(values)) return;
    values[i] = this.state.player;
    // change player for next turn
    const player = this.state.player === 'O' ? 'X' : 'O';
    this.setState({ values, player });
  }

  /**
   * check if the game can end then return the winner
   * @param {Array<Number>} squares each squares in the board
   * @returns {null|String} if winner returns O or X, else return null
   */
  checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  /**
   * reset the board with blank squares
   */
  resetBoard() {
    this.setState({
      values: Array(9).fill(null),
      player: 'O'
    });
  }

  render() {
    const winner = this.checkWinner(this.state.values);
    let status;
    if (winner) status = `Le joueur ${winner} a gagné !`;
    else status = `Joueur actuel : ${this.state.player}`;
    return (
      <div className="board">
        <div className="board__status">{status}</div>
        <div className="board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board__row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board__row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="board__reset" onClick={() => this.resetBoard()}>Recommencer</button>
      </div>
    )
  }

}