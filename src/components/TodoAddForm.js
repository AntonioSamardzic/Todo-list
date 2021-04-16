/** @format */

import React, { useState } from 'react';
import firebase from '../components/firebase';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './todolist.css';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function TodoAddForm() {
  const [todoAssignment, setTodoAssignment] = useState('');

  const [modalIsOpen, setIsOpen] = useState(false);

  var subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#000000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleOnChange = (e) => {
    setTodoAssignment(e.target.value);
  };

  const handleAddTodo = () => {
    const assignmentRef = firebase.database().ref('todo/');
    const todo = {
      todoAssignment,
    };

    assignmentRef.push(todo);
    setTodoAssignment('');
  };

  return (
    <div className='AddForm__div'>
      <button className='add' onClick={openModal}>
        <AddCircleOutlineIcon style={{ fontSize: 50 }} /> Add
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <h3 className='Modal__h2' ref={(_subtitle) => (subtitle = _subtitle)}>
          Enter your task here:
        </h3>

        <form className='Modal__form'>
          <div className='Modal__FormDiv'>
            {/* <Form.Control
              placeholder='e.g Start coding'
              onChange={handleOnChange}
              value={todoAssignment}></Form.Control> */}
            <TextField
              className='input'
              id='outlined-basic'
              label='e.g. Start coding'
              variant='outlined'
              onChange={handleOnChange}
              value={todoAssignment}
            />
            <Button
              className='Modal__addButton'
              variant='outline-primary'
              onClick={handleAddTodo}>
              Add Task
            </Button>
            <Button
              className='Modal__closeButton'
              variant='outline-secondary'
              onClick={closeModal}>
              Close
            </Button>
          </div>
          <form className={classes.root} noValidate autoComplete='off'></form>
        </form>
      </Modal>
    </div>
  );
}

export default TodoAddForm;
