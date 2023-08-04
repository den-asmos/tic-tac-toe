import { Component } from 'react';
import { connect } from 'react-redux';
import { RxCross1, RxCircle } from 'react-icons/rx';
import { resetFieldAction } from '../redux/actions';

export class EndOfGameContainer extends Component {
  chooseWinnerIcon = () => {
    return this.props.winner !== '' ? (
      this.props.winner === 'cross' ? (
        <RxCross1 className="cross" />
      ) : (
        <RxCircle className="zero" />
      )
    ) : (
      ''
    );
  };

  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="header">
          <div>{this.chooseWinnerIcon()}</div>
          {this.props.winner === '' && this.props.full === true
            ? 'The game ended in a draw'
            : 'wins!'}
        </h1>
        <button
          className="m-3 p-4 rounded-2xl bg-blue-300 text-2xl cursor-pointer transition-transform duration-300 ease-linear hover:scale-[110%] shadow-md"
          onClick={() => {
            this.props.dispatch(resetFieldAction());
          }}
        >
          Start new game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  winner: state.winner,
  full: state.full,
});

export const EndOfGame = connect(mapStateToProps)(EndOfGameContainer);
