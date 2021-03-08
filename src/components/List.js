import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';

class ToDoList extends Component {
  state = {
    addFormValue: ""
  };
  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo } = this.props;
    event.preventDefault();
    addToDo({ title: addFormValue });
    this.setState({ addFormValue: "" });
  };

  // text input handler
  renderAddForm = () => {
    const { addFormValue } = this.state;
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <label htmlFor="toDoNext">What To Do Next?</label>
              <input
                value={addFormValue}
                onChange={this.handleInputChange}
                id="toDoNext"
                type="text"
              />
            </div>
          </form>
        </div>
    );
  };

  // renders list 
  renderToDos() {
    const { data } = this.props;
    // takes data from firebase and makes an array of listed items
    if (data) {
      return Object.entries(data).map(row => {
        const [key, value] = row;
        return <ListItem key={key} todoId={key} todo={value} />;
      });
    }

    return (
      <div>
        <h4>Erthang done</h4>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchToDos();
  }
  // parent wrapper for overall render
  render() {
    return (
      <div>
        <div className="row">
          {this.renderAddForm()}
          {this.renderToDos()}
        </div>
      </div>
    );
  }

}
// react functionality to track data state
const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

// default makes this file the parent to be exported
export default connect(mapStateToProps, actions)(ToDoList);