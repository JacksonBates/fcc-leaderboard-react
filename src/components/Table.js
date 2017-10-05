import React from 'react';

const Table = () => {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>JacksonBates</td>
            <td>123</td>
            <td>456</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;