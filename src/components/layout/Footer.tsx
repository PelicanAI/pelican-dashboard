import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/logo.svg" alt="Pelican" />
          <span>Pelican Trading</span>
        </div>
        <div className="footer-links">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Pelican Trading, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
