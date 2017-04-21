import React, { Component } from 'react';
import PropTypes from 'prop-types';
import todoStyle from '../style/todo-style.scss';
import TodoTextInput from './todo-text-input';

export default class Header extends Component {
  handleSave = this.handleSave.bind(this);
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }
  render() {
    return (
      <header className={todoStyle.header}>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};
