import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div className="copyright">
                <a href="https://acycliclabs.com" target="_blank" rel="noopener noreferrer"><p>Acyclic Labs</p></a>
            </div>
            <div class="social">
                <a href="https://indium.network" target="_blank" rel="noopener noreferrer" className="support">Indium Network</a>
                <a href="https://www.facebook.com/acycliclabs" rel="noopener noreferrer" target="_blank" className="face">f</a>
                <a href="https://twitter.com/acycliclabs" rel="noopener noreferrer" target="_blank" className="tweet">t</a>
                <a href="https://www.linkedin.com/company/acyclic/" target="_blank" rel="noopener noreferrer" className="linked">in</a>
            </div>
        </footer>
    );
  }
}

export default Footer;
