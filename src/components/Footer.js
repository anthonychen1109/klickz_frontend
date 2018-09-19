import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="overlay">
          <div class="social-media">
            <a href="https://www.linkedin.com/in/anthony-chen-1109" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
            <a href="https://www.github.com/anthonychen1109" target="_blank"><i class="fab fa-github fa-3x"></i></a>
            <a href="mailto:chen.anthony.1109@gmail.com"><i class="fas fa-envelope fa-3x"></i></a>
          </div>
          <div class="copyright">
            <p>&copy; Anthony Chen</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
