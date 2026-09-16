import {
  Boxes,
  Database,
  Server,
} from "lucide-react";

function Footer() {

  return (
    <footer className="site-footer">

      <div className="footer-content">

        <div className="footer-brand">

          <div className="footer-brand-icon">
            <Boxes size={18} />
          </div>

          <div>

            <strong>ORVANTA</strong>

            <p>
              Inventory operations, clearly managed.
            </p>

          </div>

        </div>


        <div className="footer-columns">

          <div className="footer-column">

            <span className="footer-label">
              PLATFORM
            </span>

            <a href="#overview">
              Overview
            </a>

            <a href="#products">
              Products
            </a>

            <a href="#activity">
              Activity
            </a>

          </div>


          <div className="footer-column">

            <span className="footer-label">
              TECHNOLOGY
            </span>

            <span className="footer-tech">
              <Server size={13} />
              FastAPI
            </span>

            <span className="footer-tech">
              <Database size={13} />
              PostgreSQL
            </span>

            <span className="footer-tech">
              React
            </span>

          </div>


          <div className="footer-column">

            <span className="footer-label">
              PROJECT
            </span>

            <a href="#documentation">
              Documentation
            </a>

            

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Orvanta
        </span>

        <span>
          React interface · FastAPI backend
        </span>

      </div>

    </footer>
  );
}

export default Footer;