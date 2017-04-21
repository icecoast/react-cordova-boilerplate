import React, { Component } from 'react';
import PropTypes from 'prop-types';
import todoStyle from '../style/todo-style.scss';


export default class Footer extends Component {
  renderTodoCount() {
    const { unmarkedCount } = this.props;
    const itemWord = unmarkedCount === 1 ? 'item' : 'items';

    return (
      <span className={todoStyle['todo-count']}>
        <strong>{unmarkedCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = "title";
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a
        className={filter === selectedFilter ? todoStyle.selected : undefined}
        style={{ cursor: 'hand' }}
        tabIndex={0}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { markedCount, onClearMarked } = this.props;
    if (markedCount > 0) {
      return (
        <button
          className={todoStyle['clear-completed']}
          onClick={onClearMarked}
        >
          Clear completed
        </button>
      );
    }
    return undefined;
  }

  render() {
    return (
      <footer className={todoStyle.footer}>
        {this.renderTodoCount()}
        {this.renderClearButton()}
      </footer>
    );
  }
}
  // Not needed or used in minified mode
Footer.propTypes = {
  markedCount: PropTypes.number.isRequired,
  unmarkedCount: PropTypes.number.isRequired,
  filter: PropTypes.object.isRequired,
  onClearMarked: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
};
