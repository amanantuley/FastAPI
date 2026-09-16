import {
  Boxes,
  Database,
  Server,
} from "lucide-react";


function GithubIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.08c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.2.65.79.54A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}


function Footer() {

  return (
    <footer className="site-footer">

      <div className="footer-content">


        {/* BRAND */}

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


        {/* FOOTER LINKS */}

        <div className="footer-columns">


          {/* PLATFORM */}

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


          {/* TECHNOLOGY */}

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


          {/* PROJECT */}

          <div className="footer-column">

            <span className="footer-label">
              PROJECT
            </span>

            <a href="#documentation">
              Documentation
            </a>

            <a href="#github">

              <GithubIcon size={13} />

              Repository

            </a>

          </div>


        </div>

      </div>


      {/* BOTTOM */}

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