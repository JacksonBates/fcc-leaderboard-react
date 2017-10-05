import React from 'react';
import Header from './Header';
import Table from './Table';

export default class LeaderboardApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    )
  }
}