import React from 'react';
import TableBodyRecent from './TableBodyRecent';
import TableBodyAlltime from './TableBodyAlltime';

export default class Table extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Leaderboard</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Camper</th>
              <th>30 Days</th>
              <th>All Time</th>
            </tr>
          </thead>
          {(this.props.sortByRecent) ? <TableBodyRecent {...this.props} /> : <TableBodyAlltime {...this.props} />}
        </table>
      </div>
    )
  }
}