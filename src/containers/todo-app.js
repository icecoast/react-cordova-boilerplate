import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/header';
import MainSection from '../components/main-section';
import todoStyle from '../style/todo-style.scss';
import TodoItem from '../components/todo-item';

class TodoAppComponent extends Component {
  handleLogout = this.handleLogout.bind(this);
  handleLogout() {
    this.props.credentialsActions.clearCredentials();
  }
  render() {
    const { todos, todoActions } = this.props;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ marginTop: '5px' }} onClick={this.handleLogout}>Logout</button>
        </div>
        <section className={todoStyle.todoapp}>
          <div>
            <Header {...todoActions} />
            <MainSection todos={todos} {...todoActions} />
          </div>
        </section>
      </div>
    );
  }
}

TodoAppComponent.propTypes = {
  todos: PropTypes.arrayOf(TodoItem.propTypes.todo).isRequired,
  credentialsActions: PropTypes.shape({
    clearCredentials: PropTypes.func.isRequired,
    checkCredentials: PropTypes.func.isRequired,
    checkCredentialsSucess: PropTypes.func.isRequired,
    checkCredentialsFailure: PropTypes.func.isRequired,
    addCredentials: PropTypes.func.isRequired,
    addCredentialsSucess: PropTypes.func.isRequired,
    addCredentialsFailure: PropTypes.func.isRequired
  }).isRequired,
  todoActions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
    markAll: PropTypes.func.isRequired,
    clearMarked: PropTypes.func.isRequired
  }).isRequired
};

export default TodoAppComponent;
