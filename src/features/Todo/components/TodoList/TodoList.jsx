import React from 'react';
import PropTypes from 'prop-types';
import './todoList.css';
import classNames from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {

    const handleClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }

    return (
        <ul>
            {todoList.map((todo, index) => (
                <li 
                    className={classNames({completed: todo.status === 'completed'})} 
                    key={todo.id}
                    onClick={() => handleClick(todo, index)}
                > {todo.title} </li>
            ))}
        </ul>
    );
}

export default TodoList;