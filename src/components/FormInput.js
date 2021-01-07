import React, { useState } from 'react';
import Button from './Button';
import '../styles/FormInput.css'

const FormInput = ({ add }) => {
    const [text, setText] = useState("")
    const change = (e) => {
        setText(e.target.value);
    }
    const submit = e => {
        e.preventDefault();
        if (text !== "") {
            add(text);
            setText('')
        }
    }

    return (
        <form style={inputForm} onSubmit={submit}>
            <input
                style={input}
                type="text"
                value={text}
                placeholder="add task"
                onChange={change}
            />
            <Button action={submit} text="add" variant="primary" />
        </form>
    )

}

export default FormInput;

const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width: "70%",
    border: "none"
}