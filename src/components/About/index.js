import React, { Component } from 'react'
import './style.css'

class About extends Component {

  render() {
      return (
          <div>
            <div className="About-Container">
                <h1 className="animatedH">About</h1>
                <p className="animatedP">
                    <h2>Blockchain platform for app developers</h2>
                    Indium is an Ethereum-compatible blockchain network, focused on utility apps & public goods.
                    <img src="https://i.imgur.com/qw9zpfu.jpg" class="about-indium-logo" />
                </p>
            </div>
        </div>
      );
  }
}

export default About;
