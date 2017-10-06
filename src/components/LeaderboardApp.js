import React from 'react';
import Header from './Header';
import Table from './Table';

export default class LeaderboardApp extends React.Component {
  state = {
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
  };
  render() {
    return (
      <div>
        <Header />
        <Table {...this.state} />
      </div>
    )
  }
}