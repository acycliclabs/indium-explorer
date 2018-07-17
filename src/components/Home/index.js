import React, { Component } from 'react'
import './style.css'
import Stats from './../Stats';
// import GithubCorner from 'react-github-corner';

class Home extends Component {

  render() {
      return (
          <div>
            <div className="Home container">
                <Stats/>
            </div>

        </div>
      );
  }
}

export default Home;
