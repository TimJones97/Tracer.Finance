import './style.css';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <section className="main">
          <header>
            <h1>The railway tracks for financial innovation.</h1>
            <p>Financial infrastructure that stands to be the backbone of a decentralised globally secure financial network.</p>
            <div className="button-container">
              <a href="/Tracer.Finance/pages/govern/" className="tracer-btn">Govern</a>
            </div>
            <div className="button-container">
              <a href="/Tracer.Finance/pages/trade/" className="tracer-btn">Trade</a>
            </div>
          </header>   
        </section>
        <section className="eco-system">
          <div className="text-container">
            <hr/>
            <div className="left-container">
              <h2>The Tracer Eco-System</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takim
              </p>
              <a href="#" className="tracer-btn">View Docs</a>
            </div>
            <div className="right-container">
              <p>How it works</p>
              <h2>The Tracer Eco-System</h2>
              <div className="tracer-icons">
                <div className="connector-lines">
                  <h3>Governs (Optional)</h3>
                </div>
                <div className="connector-lines right">
                  <h3>Governs (Optional)</h3>
                </div>
                <figure>
                  <div className="icon">
                    <img className="tracer-image" src="../../media/images/general/tracer_DAO.svg" alt="Tracer DAO Logo"/>
                  </div>
                  <figcaption><img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/> DAO</figcaption>
                </figure>
                <div className="arrow-flow">
                  <div className="arrow-container">
                    <img className="right-arrow" src="../../media/images/general/arrow_right.svg" alt="Right arrow"/>
                    <p>Governs</p>
                    <img className="down-arrow" src="../../media/images/general/arrow_down_sml.svg" alt="Down arrow"/>
                  </div>
                </div>
                <figure>
                  <div className="icon">
                    <img className="tracer-image" src="../../media/images/general/tracer_factory.svg" alt="Tracer Factory Logo"/>
                  </div>
                  <figcaption><img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/> Factory</figcaption>
                </figure>
                <div className="arrow-flow">
                  <div className="arrow-container">
                    <img className="right-arrow" src="../../media/images/general/arrow_right.svg" alt="Right arrow"/>
                    <p>Deploys</p>
                    <img className="down-arrow" src="../../media/images/general/arrow_down_sml.svg" alt="Down arrow"/>
                  </div>
                </div>
                <figure>
                  <div className="icon">
                    <img className="tracer-image" src="../../media/images/general/tracer_perpetuals.svg" alt="Tracer Perpetuals Logo"/>
                  </div>
                  <figcaption><img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/> Perpetuals</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="text-container">
            <h2>Partners</h2>
            <div className="flex-container">
              <figure>
                <img src="../../media/images/partners/lions_mane_logo.svg" alt="Lion's Mane Logo"/>
              </figure>
              <figure className="rmit">
                <img src="../../media/images/partners/RMIT_BIH_logo.svg" alt="RMIT BIH Logo"/>
              </figure>
              <figure className="sigma">
                <img src="../../media/images/partners/sigma_prime_logo.svg" alt="Sigma Prime Logo"/>
              </figure>
            </div>
          </div>
        </section>
          <footer>
        <div className="text-container">
          <hr/>
          <div className="left-container">
            <div className="logo-container">
              <img src="../../media/images/footer/tracer_logo_blue.svg" alt="Tracer Logo"/>
              <p>&copy;&nbsp;<span className="year"></span> Tracer Ltd</p>
            </div>
          </div>
          <div className="right-container">
            <div className="sitemap">
              <p className="title"><b>Sitemap</b></p>
              <div className="sitemap-links">
                <a href="/Tracer.Finance/pages/govern/">
                  <p>Govern</p>
                </a>
                <a href="/Tracer.Finance/pages/trade/">
                  <p>Trade</p>
                </a>
                <a href="/Tracer.Finance/pages/learn/">
                  <p>Learn</p>
                </a>
                <a href="/Tracer.Finance/pages/build/">
                  <p>Build</p>
                </a>
                <a href="/Tracer.Finance/pages/blog/" className="blog">
                  <p>Blog</p>
                </a>
              </div>
            </div>
            <div className="sitemap legal">
              <p className="title"><b>Legal</b></p>
              <div className="sitemap-links">
                <a href="https://gov.tracer.finance/" className="mobile-links">
                  <p>Tracer Governance</p>
                </a>
                <a href="/Tracer.Finance/pages/blog/" className="mobile-links">
                  <p>Tracer Blog</p>
                </a>
                <a href="/Tracer.Finance/pages/privacy-policy/">
                  <p>Privacy Policy</p>
                </a>
                <a href="/Tracer.Finance/pages/terms/">
                  <p>Terms of Use</p>
                </a>
              </div>
            </div>
            <div className="pull-right">
              <a href="#" className="tracer-btn blue inline">Subscribe to Mailing list</a>
              <input className="tracer-btn search" placeholder="Search"/>
              <div className="ellipse-container">
                <img src="../../media/images/footer/ellipse.svg" alt="Ellipse icon"/>
                <img src="../../media/images/footer/ellipse.svg" alt="Ellipse icon"/>
                <img src="../../media/images/footer/ellipse.svg" alt="Ellipse icon"/>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <a className="social-link" href="https://discourse.tracer.finance/">
              <img src="../../media/images/footer/discourse_blue.svg" alt="Discourse icon"/>
            </a>
            <a className="social-link" href="https://github.com/tracer-protocol">
              <img src="../../media/images/footer/github_blue.svg" alt="Github icon"/>
            </a>
            <a className="social-link" href="https://discord.gg/kvJEwfvyrW">
              <img src="../../media/images/footer/discord_blue.svg" alt="Discord icon"/>
            </a>
            <a className="social-link" href="https://twitter.com/tracer_finance">
              <img src="../../media/images/footer/twitter_blue.svg" alt="Twitter icon"/>
            </a>
          </div>
        </div>
        </footer>
        <video className="video-bg" muted loop="loop" autoPlay playsInline>
            <source src="../../media/images/general/tracer_home.mp4" type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default App;
