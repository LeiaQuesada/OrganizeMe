import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions';

class ListItem extends Component {
  handleComplete = completeToDoId => {
    const {completeToDo} = this.props;
    completeToDo(completeToDoId);
  };
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key="toDoName">
        <h4>
            <span onClick={() => this.handleComplete(todoId)}>
            {todo.title}
            </span>
        </h4>
      </div>
    );
  };
}
export default connect(null, {completeToDo})(ListItem);