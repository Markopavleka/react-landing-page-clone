import './module.scss';
import browserMockup from './Logo/browser-mockup.svg';
import chromlogo from './Logo/chrome-logo.dccedd0b.svg';
import clouds from './Logo/clouds.svg';
import featuredLogo from './Logo/featured.svg';
import slide1 from './Logo/slide1.jpg';
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
              ADD TO CHROME
              <span>- IT'S FREE</span>
            </a>
          </div>
        </div>
        <div className="browser">
          <img src={browserMockup} alt="mockup" />
          <div className="slide">
            <img src={slide1} alt="slide1" />
          </div>
        </div>
        <div>
          <svg src={clouds} />
        </div>
      </section>
    </>
  );
}
