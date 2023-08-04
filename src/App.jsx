import { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, EndOfGame } from './components';
import { checkWinner, isFull } from './utils';
import { setWinnerAction, setFullAction } from './redux/actions';

export class AppContainer extends Component {
  checkTheWinner = () => {
    if (checkWinner(this.props.field)) {
      this.props.dispatch(setWinnerAction(this.props.move));
    }
  };

  checkTheField = () => {
    if (!isFull(this.props.field)) {
      this.props.dispatch(setFullAction());
    }
  };

  render() {
    console.log(this.props.field);
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        {this.props.winner === '' && !this.props.full ? (
          <Layout
            checkTheField={this.checkTheField}
            checkTheWinner={this.checkTheWinner}
          />
        ) : (
          <EndOfGame />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  move: state.move,
  winner: state.winner,
  full: state.full,
});

export const App = connect(mapStateToProps)(AppContainer);
