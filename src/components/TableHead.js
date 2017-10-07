import React from 'react';
import TableBody from './TableBody';

const TableHead = (props) => (
  <div className='table-container'>
    <table className='table-container__table'>
      <thead>
        <tr>
          <th 
            className='table-container__title'
            colSpan='4'
          >
            Leaderboard
          </th>
        </tr>
        <tr className='table-container__headings'>
          <th>#</th>
          <th>Camper</th>
          <th><button onClick={props.handleRecent}>30 Days</button></th>
          <th><button onClick={props.handleAlltime}>All Time</button></th>
        </tr>
      </thead>
      <TableBody {...props}/>
    </table>
  </div>
);

export default TableHead;
