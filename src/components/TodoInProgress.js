/** @format */

import React, { useState } from 'react';
import firebase from '../components/firebase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function TodoInProgress({ todo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReview = () => {
    const doneRef = firebase.database().ref('todo');
    const done = {
      todoReview: todo.todoInProgress,
    };

    doneRef.push(done);

    const todoRef = firebase.database().ref('todo').child(todo.id);
    todoRef.remove();
    console.log('done', done);
  };

  const handleDelete = () => {
    const todoRef = firebase.database().ref('todo').child(todo.id);
    todoRef.remove().then(console.log('ovdje', todo.id));
  };

  return todo.todoInProgress ? (
    <div className='todos'>
      <p>{todo.todoInProgress} </p>
      <div className='todos__buttons'>
        <IconButton onClick={handleDelete} aria-label='delete'>
          <DeleteIcon color='secondary' fontSize='small' />
        </IconButton>
        <MoreVertIcon
          className='todos__buttons__more'
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
          aria-label='delete'
          fontSize='small'
        />

        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClick={handleClose}
          onClose={handleClose}>
          <MenuItem onClick={handleReview}> Mark as Review</MenuItem>
        </Menu>
      </div>
    </div>
  ) : (
    ''
  );
}

export default TodoInProgress;
