/** @format */

import React from 'react';
import './todolist.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Todo from '../components/Todo';
import TodoDone from './TodoDone';
import TodoInProgress from './TodoInProgress';
import TodoReview from './TodoReview';

function TodoList({ todoList }) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  return todoList ? (
    <div className='body'>
      <div className='row'>
        <div className='column'>
          <div className='card'>
            <h3>Todo</h3>
            {todoList.map((todo, index) => (
              <Todo key={index} todo={todo} />
            ))}
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <h3>In progress</h3>
            {todoList.map((todo, index) => (
              <TodoInProgress key={index} todo={todo} />
            ))}
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <h3>Review</h3>
            {todoList.map((todo, index) => (
              <TodoReview key={index} todo={todo} />
            ))}
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <h3>Done</h3>
            {todoList.map((todo, index) => (
              <TodoDone key={index} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='loader'>
      <Loader
        type='Oval'
        color='#000000'
        height={100}
        width={100}
        timeout={4000}
      />
      <h4>Loading...</h4>
    </div>
  );
}

export default TodoList;
