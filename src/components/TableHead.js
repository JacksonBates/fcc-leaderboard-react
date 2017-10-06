import React from 'react';
import TableBodyRecent from './TableBodyRecent';
import TableBodyAlltime from './TableBodyAlltime';

const TableHead = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Leaderboard</th>
        </tr>
        <tr>
          <th>#</th>
          <th>Camper</th>
          <th><button onClick={props.handleRecent}>30 Days</button></th>
          <th><button onClick={props.handleAlltime}>All Time</button></th>
        </tr>
      </thead>
      {(props.sortByRecent) ? <TableBodyRecent {...props} /> : <TableBodyAlltime {...props} />}
    </table>
  </div>
);

export default TableHead;
