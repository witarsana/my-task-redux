import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import '../styles/DeleteDialog.css';
const DeleteDialog = (props) => {
    const { del, close, deleteact } = props;
    if (del) {
        return (
            <div className="delete-container">
                <div className="delete-box">
                    <h4>Are you sure delete data?</h4>
                    <div className="button-group">
                        <Button action={deleteact} text="Delete" variant="success" />
                        <Button action={close} text="Cancel" variant="warning" />
                    </div>
                </div>

            </div>
        )
    } else {
        return null;
    }

}

DeleteDialog.propTypes = {
    del: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    deleteact: PropTypes.func.isRequired
}

export default DeleteDialog;