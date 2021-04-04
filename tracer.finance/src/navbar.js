import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="navbar navbar-expand-xl">
          <a className="navbar-brand" href="/Tracer.Finance/pages/home/">
            <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo" />
          </a>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="../../media/images/nav/triangle_down.svg" alt="Dropdown icon" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="nav-item">
                <a className="nav-link" href="/Tracer.Finance/pages/home/">
                  <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo" />
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/Tracer.Finance/pages/govern/">
                  <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo - Governance" />
                  &nbsp;Governance
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/Tracer.Finance/pages/blog/">
                  <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo - Blog" />
                  &nbsp;Blog
                </a>
              </div>
              <div className="nav-item social-links">
                <div className="flex-container">
                  <a className="nav-link social" href="https://discourse.tracer.finance/">
                    <img src="../../media/images/nav/discourse.svg" alt="Discourse icon" />
                  </a>
                  <a className="nav-link social" href="https://github.com/tracer-protocol">
                    <img src="../../media/images/nav/github.svg" alt="Github icon" />
                  </a>
                  <a className="nav-link social" href="https://discord.gg/kvJEwfvyrW">
                    <img src="../../media/images/nav/discord.svg" alt="Discord icon" />
                  </a>
                  <a className="nav-link social" href="https://twitter.com/tracer_finance">
                    <img src="../../media/images/nav/twitter.svg" alt="Twitter icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="navbar-toggler x" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item menu">
                Menu
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Tracer.Finance/pages/govern/">Govern</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Tracer.Finance/pages/trade/">Trade</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Tracer.Finance/pages/learn/">Learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Tracer.Finance/pages/build/">Build</a>
              </li>
              <li className="nav-item blog ">
                <a className="nav-link" href="/Tracer.Finance/pages/blog/">Blog</a>
              </li>
              <li className="nav-item exchange">
                <a className="nav-link" href="#">Tracer Exchange</a>
              </li>
              <li className="bottom-nav">
                <ul>
                  <li className="nav-item">
                    <a className="nav-link" href="/Tracer.Finance/pages/govern/">
                      <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo - Governance" />
                      &nbsp;Governance
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Tracer.Finance/pages/blog/">
                      <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo - Blog" />
                      &nbsp;Blog
                    </a>
                  </li>
                  <li className="nav-item social-links">
                    <div className="flex-container">
                      <a className="nav-link social" href="https://discourse.tracer.finance/">
                        <img src="../../media/images/nav/discourse.svg" alt="Discourse icon" />
                      </a>
                      <a className="nav-link social" href="https://github.com/tracer-protocol">
                        <img src="../../media/images/nav/github.svg" alt="Github icon" />
                      </a>
                      <a className="nav-link social" href="https://discord.gg/kvJEwfvyrW">
                        <img src="../../media/images/nav/discord.svg" alt="Discord icon" />
                      </a>
                      <a className="nav-link social" href="https://twitter.com/tracer_finance">
                        <img src="../../media/images/nav/twitter.svg" alt="Twitter icon" />
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <video className="video-bg" muted loop="loop" autoPlay playsInline>
              <source src="../../media/images/general/tracer_home.mp4" type="video/mp4" />
            </video>
          </div>
        </nav>
      </div>
    );
  }
});
export default Navbar;