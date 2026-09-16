import {
  Boxes,
  LayoutDashboard,
  Package,
  Activity,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

function Header({ onRefresh, loading }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">

      <div className="header-inner">

        {/* Brand */}

        <a href="#overview" className="brand">

          <div className="brand-mark">
            <Boxes size={19} />
          </div>

          <div className="brand-text">
            <strong>ORVANTA</strong>
            <span>Inventory operations</span>
          </div>

        </a>


        {/* Desktop Navigation */}

        <nav className="desktop-nav">

          <a
            href="#overview"
            className="nav-link active"
          >
            <LayoutDashboard size={15} />
            Overview
          </a>

          <a
            href="#products"
            className="nav-link"
          >
            <Package size={15} />
            Products
          </a>

          <a
            href="#activity"
            className="nav-link"
          >
            <Activity size={15} />
            Activity
          </a>

        </nav>


        {/* Right Actions */}

        <div className="header-actions">

          <div className="connection-status">
            <span className="connection-dot"></span>
            API Connected
          </div>


          <button
            className="header-refresh"
            onClick={onRefresh}
            disabled={loading}
          >

            <RefreshCw
              size={15}
              className={loading ? "spin" : ""}
            />

            <span>Refresh</span>

          </button>


          <button
            className="mobile-menu"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

        </div>

      </div>


      {/* Mobile Navigation */}

      {menuOpen && (

        <nav className="mobile-nav">

          <a
            href="#overview"
            onClick={() => setMenuOpen(false)}
          >
            Overview
          </a>

          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>

          <a
            href="#activity"
            onClick={() => setMenuOpen(false)}
          >
            Activity
          </a>

        </nav>

      )}

    </header>
  );
}

export default Header;