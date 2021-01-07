import React from 'react';
import logo from './logo.svg';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import './App.css';
import EditModal from './components/EditModal';
import DeleteDialog from './components/DeleteDialog';
import { useSelector } from 'react-redux'

const App = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Task List</h3>
      </div>
      <div className="list">
        {todos.map(item =>
          <TodoItem
            key={item.id}
            todo={item}
          />
        )}

      </div>
      <div className="input-form">
        <FormInput />
      </div>
      <EditModal />
      <DeleteDialog />
    </div>
  )
}

export default App;