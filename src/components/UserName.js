/** @format */

import React from 'react';
import Moment from 'react-moment';
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
let datetoFormat = new Date().toLocaleString() + '';
function UserName() {
  return (
    <div className='username'>
      <h1>
        Todo List App <ClearAllRoundedIcon style={{ fontSize: 70 }} />
      </h1>
      <h2>Welcome, Antonio!</h2>
      <h4>
        <Moment format='DD-MM-YYYY'>{datetoFormat}</Moment>
      </h4>
    </div>
  );
}

export default UserName;
