import React, { useState } from 'react';
import logo from './logo.svg';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import './App.css';
import EditModal from './components/EditModal';
import DeleteDialog from './components/DeleteDialog';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Reading Book'
    },
    {
      id: 2,
      title: 'Workout Training'
    }
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: '',
    title: ''
  });
  const [isDelete, setIsDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const setTitle = e => {
    setEditData({
      id: editData.id,
      title: e.target.value
    })
  }

  const showDelete = id => {
    setIsDelete(true);
    setDeleteId(id);
  }

  const closeDelete = () => {
    setIsDelete(false);
    setDeleteId(0);
  }

  const deleteTask = () => {
    setTodos(todos.filter(td => td.id !== deleteId));
    closeDelete();
  }

  const addTask = (data) => {
    const newTask = {
      id: todos.length + 1,
      title: data
    }
    setTodos([...todos, newTask]);
  }

  const openModal = (id, data) => {
    setIsEdit(true);
    setEditData({
      id: id,
      title: data
    });
  }

  const closeModal = () => {
    setIsEdit(false);
  }

  const saveEdit = () => {
    const index = todos.findIndex(td => td.id === editData.id);
    todos.splice(index, 1, editData);
    setTodos(todos);
    closeModal();
  }

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Task List</h3>
      </div>
      <div className="list">
        {todos.map(item =>
          <TodoItem
            del={showDelete}
            key={item.id}
            todo={item}
            open={openModal}
          />
        )}

      </div>
      <div className="input-form">
        <FormInput add={addTask} />
      </div>
      <EditModal
        change={setTitle}
        close={closeModal}
        edit={isEdit}
        data={editData}
        save={saveEdit}
      />
      <DeleteDialog deleteact={deleteTask} close={closeDelete} del={isDelete} />
    </div>
  )
}

export default App;