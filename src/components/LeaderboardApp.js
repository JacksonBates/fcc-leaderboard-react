import React from 'react';
import Header from './Header';
import TableHead from './TableHead';

export default class LeaderboardApp extends React.Component {
  state = {
    sortByRecent: true,
    recent: [],
    alltime: []
  };
  componentDidMount() {
    const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    fetch(recentUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState(() => ({
          recent: data
        }));
      });
      const alltimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
      fetch(alltimeUrl)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState(() => ({
            alltime: data
          }));
        });
  };
  render() {
    return (
      <div>
        <Header />
        <TableHead {...this.state} />
      </div>
    )
  }
}