import React from 'react';
import TableBody from './TableBody';

const TableHead = (props) => (
  <div className='table-container'>
    <table 
      className='table-container__table'
      width='100%'
    >
      <thead>
        <tr >
          <th 
            className='table-container__title'
            colSpan='5'
          >
            Leaderboard
          </th>
        </tr>
        <tr className='table-container__headings'>
          <th style={{padding: 10}}>#</th>
          <th></th>
          <th>Camper</th>
          <th>
            <button 
            className='table-container__button'  
            onClick={props.handleRecent}
            >
              30 Days
            </button>
          </th>
          <th>
            <button 
            className='table-container__button'  
            onClick={props.handleAlltime}
            >
              All Time
            </button>
          </th>
        </tr>
      </thead>
      <TableBody {...props}/>
    </table>
  </div>
);

export default TableHead;
