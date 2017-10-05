import React from 'react';

export default class Table extends React.Component {
  state = {
    recent: []
  };
  componentDidMount() {
    const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState(() => ({
          recent: data
        }));
      });
  };
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
          <tbody>
          {this.state.recent.map((camper, index) => { 
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
        </table>
      </div>
    )
  }
}