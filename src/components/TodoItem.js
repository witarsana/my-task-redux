import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { showEdit, showDelete } from '../store/actions/todos';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const open = (id) => {
        dispatch(showEdit(id));
    }
    const del = (id) => {
        dispatch(showDelete(id));
    }
    return (
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button action={() => { open(todo.id) }} text="edit" variant="success" />
                <Button action={() => del(todo.id)} text="delete" variant="warning" />
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
}

export default TodoItem;

const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
} 