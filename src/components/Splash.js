import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

class Splash extends Component {
  render() {
    return (
      <div className="splashPage">
        <div className="overlay">
          <div className="splashText">
            <h1>A personalized travel planner</h1>
            <button to='/home' className="splashButton btn btn-primary animated bounceInDown">Start your Journey</button>
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
