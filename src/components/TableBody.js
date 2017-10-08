import React from 'react';

export default class TableBody extends React.Component {
  render() {
    return (
      <tbody>
      {this.props.data.map((camper, index) => { 
        return (
          <tr key={camper.username}>
            <td className='table-container__text table-container__text--id'>{index + 1}</td>
            <td className='table-container__text'>
              <img 
                className='table-container__img'
                src={camper.img} 
                alt='{username} profile picture' 
                height='40' 
                width='40'
              />
            </td>
            <td className='table-container__text'>{camper.username}
            </td>
            <td className='table-container__text table-container__text--center'>{camper.recent}</td>
            <td className='table-container__text table-container__text--center'>{camper.alltime}</td>
          </tr>
        )}
      )}
      </tbody>
    )
  }
}