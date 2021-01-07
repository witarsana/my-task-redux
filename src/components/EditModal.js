import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/EditModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeEdit, edit } from '../store/actions/todos';

const EditModal = () => {
    const isEdit = useSelector(state => state.todos.isEdit);
    const editData = useSelector(state => state.todos.editTodo);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const change = (e) => {
        setText(e.target.value);
    }
    const close = () => {
        dispatch(closeEdit());
    }
    const save = () => {
        dispatch(edit(editData.id, text));
    }

    useEffect(() => {
        setText(editData.title);
    }, [editData])

    if (isEdit) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Task</h3>
                    <div className="input">
                        <input onChange={change} value={text} type="text" />
                    </div>
                    <div className="btn-group">
                        <Button action={save} text="save" variant="success" />
                        <Button action={close} text="cancel" variant="warning" />
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default EditModal;