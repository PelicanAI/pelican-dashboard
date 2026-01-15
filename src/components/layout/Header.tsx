import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/logo.svg" alt="Pelican" />
          <span>Pelican</span>
        </Link>
        <div className="nav-links">
          <Link to="/features" className={isActive('/features') ? 'active' : ''}>
            Features
          </Link>
          <Link to="/pricing" className={isActive('/pricing') ? 'active' : ''}>
            Pricing
          </Link>
          <Link to="/team" className={isActive('/team') ? 'active' : ''}>
            Team
          </Link>
          <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>
            FAQ
          </Link>
          <ThemeToggle />
          <Link to="/chat" className="btn-primary">
            Launch App →
          </Link>
        </div>
      </div>
    </nav>
  );
}
