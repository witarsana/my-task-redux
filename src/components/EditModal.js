import React from 'react';
import Button from './Button';
import '../styles/EditModal.css';

const EditModal = ({ edit, close, change, data, save }) => {
    if (edit) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Task</h3>
                    <div className="input">
                        <input onChange={change} value={data.title} type="text" />
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