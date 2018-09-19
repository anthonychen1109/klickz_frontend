import React, { Component } from 'react';
import Footer from './Footer';

class Splash extends Component {
  render() {
    return (
      <div className="splashPage">
        <div className="overlay">
          <div className="splashText">
            <h1>A personalized travel planner</h1>
            <button className="btn btn-primary animated bounceInDown">Start your Journey</button>
          </div>
          <div className="splashLogo">
            <h1>Klicks</h1>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Splash;
