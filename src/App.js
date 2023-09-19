import './module.scss';
import chromlogo from './Logo/chrome-logo.dccedd0b.svg';
import featuredLogo from './Logo/featured.svg';
import spatiumLogo from './Logo/spatium.svg';

export default function App() {
  return (
    <>
      <header>
        <div className="navContainer">
          <div className="navLogo">
            <a>
              <img src={spatiumLogo} alt="Logo" />
            </a>
          </div>
          <nav>
            <a className="feature" href="/#">
              Features
            </a>
            <a>
              <img src={featuredLogo} alt="featured" />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="firstContainer">
          <h1>A space odyssey</h1>
          <h1>awaits you.</h1>
          <p className="heroSubtitle">
            Beautiful space images and information of your current sky map
            location on every <strong>new tab</strong>.
          </p>
          <div className="chromButton">
            <a href="/#" className="buttonText">
              <img src={chromlogo} alt="Chrome Web Store" />
              <p>ADD TO CHROME</p>
              <span>- IT'S FREE</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
