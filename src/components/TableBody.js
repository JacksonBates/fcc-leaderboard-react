import React from 'react';

export default class TableBody extends React.Component {
  render() {
    return (
      <tbody>
      {this.props.data.map((camper, index) => { 
        return (
          <tr key={camper.username}>
            <td>{index + 1}</td>
            <td>
              <img 
                src={camper.img} 
                alt='{username} profile picture' 
                height='40' 
                width='40'
              />
              {camper.username}
            </td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
          </tr>
        )}
      )}
      </tbody>
    )
  }
}