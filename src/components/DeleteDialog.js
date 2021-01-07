import React from 'react';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/DeleteDialog.css';
import { closeDelete, del } from '../store/actions/todos';
const DeleteDialog = () => {
    const dispatch = useDispatch();
    const isDelete = useSelector(state => state.todos.isDelete);
    const deleteAct = () => {
        dispatch(del());
    }
    const close = () => {
        dispatch(closeDelete());
    }
    if (isDelete) {
        return (
            <div className="delete-container">
                <div className="delete-box">
                    <h4>Are you sure delete data?</h4>
                    <div className="button-group">
                        <Button action={deleteAct} text="Delete" variant="success" />
                        <Button action={close} text="Cancel" variant="warning" />
                    </div>
                </div>

            </div>
        )
    } else {
        return null;
    }

}


export default DeleteDialog;