import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import UserModal from './UserModal';
import HandleUserForm from './HandleUserForm';

class Splash extends Component {
  state = {
    registered: false
  }

  register = () => {
    this.setState({
      registered: false
    })
  }

  login = () => {
    this.setState({
      registered: true
    })
  }

  render() {
    return (
      <div className="splashPage">
        <div className="overlay">
          <div className="splashText">

          </div>
          <div className="splashLogo">
            <div>
              <h1>Your Personalized Meetup Planner</h1>
            </div>
            <div className="splashModalBtns">
              <UserModal
                registered={this.state.registered}
                register={this.register}
                login={this.login}
                />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Splash;
