import React from 'react';
import Header from './Header';
import TableHead from './TableHead';

export default class LeaderboardApp extends React.Component {
  state = {
    sortByRecent: true,
    data: [],
    recent: [],
    alltime: []
  };
  handleRecent = () => {
    if (!this.state.sortByRecent) {
      // this.setState(() => ({ sortByRecent: true }));
      this.setState(() => ({ 
        sortByRecent: true,
        data: this.state.recent 
      }));      
    }
  }
  handleAlltime = () => {
    if (this.state.sortByRecent) {
      // this.setState(() => ({ sortByRecent: true }));
      this.setState(() => ({
        sortByRecent: false,
        data: this.state.alltime 
      }));
    }
  }
  componentDidMount() {
    const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    fetch(recentUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState(() => ({
          recent: data,
          data
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
        <TableHead 
          {...this.state}
          handleAlltime={this.handleAlltime}
          handleRecent={this.handleRecent}
        />
      </div>
    )
  }
}