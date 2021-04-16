/** @format */

import React from 'react';
import firebase from '../components/firebase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function TodoDone({ todo }) {
  const handleDelete = () => {
    const todoRef = firebase.database().ref('todo').child(todo.id);
    todoRef.remove().then(console.log('ovdje', todo.id));
  };

  return todo.todoDone ? (
    <div className='todos'>
      <p>{todo.todoDone} </p>
      <div className='todos__buttons'>
        <IconButton onClick={handleDelete} aria-label='delete'>
          <DeleteIcon color='secondary' fontSize='small' />
        </IconButton>
      </div>
    </div>
  ) : (
    ''
  );
}

export default TodoDone;
