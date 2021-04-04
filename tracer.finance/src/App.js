import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
            <div class="nav-container">
              <nav class="navbar navbar-expand-xl">
                <a class="navbar-brand" href="/Tracer.Finance/pages/home/">
                  <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/>
                </a>
                <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="../../media/images/nav/triangle_down.svg" alt="Dropdown icon"/>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div class="nav-item">
                      <a class="nav-link" href="/Tracer.Finance/pages/home/">
                        <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/>
                      </a>
                    </div>
                    <div class="nav-item">
                      <a class="nav-link" href="/Tracer.Finance/pages/govern/">
                        <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo - Governance"/>
                        &nbsp;Governance
                      </a>
                    </div>
                    <div class="nav-item">
                      <a class="nav-link" href="/Tracer.Finance/pages/blog/">
                        <img src="../../media/images/general/tracer_logo.svg"  alt="Tracer Logo - Blog"/>
                        &nbsp;Blog
                      </a>
                    </div>
                    <div class="nav-item social-links">
                      <div class="flex-container">
                        <a class="nav-link social" href="https://discourse.tracer.finance/">
                              <img src="../../media/images/nav/discourse.svg" alt="Discourse icon"/>
                            </a>
                            <a class="nav-link social" href="https://github.com/tracer-protocol">
                              <img src="../../media/images/nav/github.svg" alt="Github icon"/>
                            </a>
                            <a class="nav-link social" href="https://discord.gg/kvJEwfvyrW">
                              <img src="../../media/images/nav/discord.svg" alt="Discord icon"/>
                            </a>
                            <a class="nav-link social" href="https://twitter.com/tracer_finance">
                              <img src="../../media/images/nav/twitter.svg" alt="Twitter icon"/>
                            </a>
                      </div>
                    </div>
                  </div>
                </div>
                  <button class="navbar-toggler x" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                      <li class="nav-item menu">
                        Menu
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/Tracer.Finance/pages/govern/">Govern</a>
                        </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/Tracer.Finance/pages/trade/">Trade</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/Tracer.Finance/pages/learn/">Learn</a>
                        </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/Tracer.Finance/pages/build/">Build</a>
                      </li>
                      <li class="nav-item blog ">
                          <a class="nav-link" href="/Tracer.Finance/pages/blog/">Blog</a>
                      </li>
                      <li class="nav-item exchange">
                          <a class="nav-link" href="#">Tracer Exchange</a>
                      </li>
                      <li class="bottom-nav">
                        <ul>
                          <li class="nav-item">
                              <a class="nav-link" href="/Tracer.Finance/pages/govern/">
                                <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo - Governance"/>
                                &nbsp;Governance
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="/Tracer.Finance/pages/blog/">
                                <img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo - Blog">
                                &nbsp;Blog
                              </a>
                          </li>
                            <li class="nav-item social-links">
                              <div class="flex-container">
                                <a class="nav-link social" href="https://discourse.tracer.finance/">
                                  <img src="../../media/images/nav/discourse.svg" alt="Discourse icon"/>
                                </a>
                                <a class="nav-link social" href="https://github.com/tracer-protocol">
                                  <img src="../../media/images/nav/github.svg" alt="Github icon"/>
                                </a>
                                <a class="nav-link social" href="https://discord.gg/kvJEwfvyrW">
                                  <img src="../../media/images/nav/discord.svg" alt="Discord icon"/>
                                </a>
                                <a class="nav-link social" href="https://twitter.com/tracer_finance">
                                  <img src="../../media/images/nav/twitter.svg" alt="Twitter icon"/>
                                </a>
                              </div>
                            </li>
                        </ul>
                      </li>
                    </ul>
                    <video class="video-bg" muted loop="loop" autoplay playsinline>
                        <source src="../../media/images/general/tracer_home.mp4" type="video/mp4">
                    </video>
                </div>
              </nav>
              </div>
              <section class="main">
                <header>
                  <h1>The railway tracks for financial innovation.</h1>
                  <p>Financial infrastructure that stands to be the backbone of a decentralised globally secure financial network.</p>
                  <div class="button-container">
                    <a href="/Tracer.Finance/pages/govern/" class="tracer-btn">Govern</a>
                  </div>
                  <div class="button-container">
                    <a href="/Tracer.Finance/pages/trade/" class="tracer-btn">Trade</a>
                  </div>
                </header>   
              </section>
              <section class="eco-system">
                <div class="text-container">
                  <hr>
                  <div class="left-container">
                    <h2>The Tracer Eco-System</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takim
                    </p>
                    <a href="#" class="tracer-btn">View Docs</a>
                  </div>
                  <div class="right-container">
                    <p>How it works</p>
                    <h2>The Tracer Eco-System</h2>
                    <div class="tracer-icons">
                      <div class="connector-lines">
                        <h3>Governs (Optional)</h3>
                      </div>
                      <div class="connector-lines right">
                        <h3>Governs (Optional)</h3>
                      </div>
                      <figure>
                        <div class="icon"/>
                          <img class="tracer-image" src="../../media/images/general/tracer_DAO.svg" alt="Tracer DAO Logo"/>
                        </div>
                        <figcaption><img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/> DAO</figcaption>
                      </figure>
                      <div class="arrow-flow">
                        <div class="arrow-container">
                          <img class="right-arrow" src="../../media/images/general/arrow_right.svg" alt="Right arrow">
                          <p>Governs</p>
                          <img class="down-arrow" src="../../media/images/general/arrow_down_sml.svg" alt="Down arrow">
                        </div>
                      </div>
                      <figure>
                        <div class="icon"/>
                          <img class="tracer-image" src="../../media/images/general/tracer_factory.svg" alt="Tracer Factory Logo"/>
                        </div>
                        <figcaption><img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/> Factory</figcaption>
                      </figure>
                      <div class="arrow-flow">
                        <div class="arrow-container">
                          <img class="right-arrow" src="../../media/images/general/arrow_right.svg" alt="Right arrow">
                          <p>Deploys</p>
                          <img class="down-arrow" src="../../media/images/general/arrow_down_sml.svg" alt="Down arrow">
                        </div>
                      </div>
                      <figure>
                        <div class="icon"/>
                          <img class="tracer-image" src="../../media/images/general/tracer_perpetuals.svg" alt="Tracer Perpetuals Logo"/>
                        </div>
                        <figcaption><img src="../../media/images/general/tracer_logo.svg" alt="Tracer Logo"/> Perpetuals</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </section>
              <section class="partners">
                <div class="text-container">
                  <h2>Partners</h2>
                  <div class="flex-container">
                    <figure>
                      <img src="../../media/images/partners/lions_mane_logo.svg" alt="Lion's Mane Logo"/>
                    </figure>
                    <figure class="rmit">
                      <img src="../../media/images/partners/RMIT_BIH_logo.svg" alt="RMIT BIH Logo"/>
                    </figure>
                    <figure class="sigma">
                      <img src="../../media/images/partners/sigma_prime_logo.svg" alt="Sigma Prime Logo"/>
                    </figure>
                  </div>
                </div>
              </section>
                <footer>
              <div class="text-container">
                <hr>
                <div class="left-container">
                  <div class="logo-container">
                    <img src="../../media/images/footer/tracer_logo_blue.svg" alt="Tracer Logo"/>
                    <p>&copy;&nbsp;<span class="year"></span> Tracer Ltd</p>
                  </div>
                </div>
                <div class="right-container">
                  <div class="sitemap">
                    <p class="title"><b>Sitemap</b></p>
                    <div class="sitemap-links">
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
                      <a href="/Tracer.Finance/pages/blog/" class="blog">
                        <p>Blog</p>
                      </a>
                    </div>
                  </div>
                  <div class="sitemap legal">
                    <p class="title"><b>Legal</b></p>
                    <div class="sitemap-links">
                      <a href="https://gov.tracer.finance/" class="mobile-links">
                        <p>Tracer Governance</p>
                      </a>
                      <a href="/Tracer.Finance/pages/blog/" class="mobile-links">
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
                  <div class="pull-right">
                    <a href="#" class="tracer-btn blue inline">Subscribe to Mailing list</a>
                    <input class="tracer-btn search" placeholder="Search">
                    <div class="ellipse-container">
                      <img src="../../media/images/footer/ellipse.svg" alt="Ellipse icon"/>
                      <img src="../../media/images/footer/ellipse.svg" alt="Ellipse icon"/>
                      <img src="../../media/images/footer/ellipse.svg" alt="Ellipse icon"/>
                    </div>
                  </div>
                </div>
                <div class="social-icons">
                  <a class="social-link" href="https://discourse.tracer.finance/">
                    <img src="../../media/images/footer/discourse_blue.svg" alt="Discourse icon"/>
                  </a>
                  <a class="social-link" href="https://github.com/tracer-protocol">
                    <img src="../../media/images/footer/github_blue.svg" alt="Github icon"/>
                  </a>
                  <a class="social-link" href="https://discord.gg/kvJEwfvyrW">
                    <img src="../../media/images/footer/discord_blue.svg" alt="Discord icon"/>
                  </a>
                  <a class="social-link" href="https://twitter.com/tracer_finance">
                    <img src="../../media/images/footer/twitter_blue.svg" alt="Twitter icon"/>
                  </a>
                </div>
              </div>
              </footer>
            <video class="video-bg" muted loop="loop" autoplay playsinline>
                <source src="../../media/images/general/tracer_home.mp4" type="video/mp4">
            </video>
      </div>
    );
  }
}

export default App;
