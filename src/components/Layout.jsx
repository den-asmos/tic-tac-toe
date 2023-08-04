import { Component } from 'react';
import { connect } from 'react-redux';
import { RxCross1, RxCircle } from 'react-icons/rx';
import { updateFieldAction } from './../redux/actions';

export class LayoutContainer extends Component {
  onClick = (number) => {
    this.props.dispatch(updateFieldAction(number));
    this.props.checkTheWinner();
    this.props.checkTheField();
  };

  render() {
    return (
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="header">
          It's{' '}
          <div>
            {this.props.move === 'cross' ? (
              <RxCross1 className="cross" />
            ) : (
              <RxCircle className="zero" />
            )}
          </div>{' '}
          turn
        </h1>

        <div className="grid grid-cols-3 grid-rows-3 shadow-md">
          {this.props.field.map((item) => {
            return (
              <div
                className="h-[125px] w-[125px] flex justify-center items-center border border-slate-400 rounded-md text-7xl"
                key={Math.random()}
                onClick={() => this.onClick(item.number)}
              >
                {item.value !== '' ? (
                  item.value === 'cross' ? (
                    <RxCross1 className="cross" />
                  ) : (
                    <RxCircle className="zero" />
                  )
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  move: state.move,
});

export const Layout = connect(mapStateToProps)(LayoutContainer);
