import RegisterCanvas from "./user/RegisterCanvas.jsx";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function NavBar() {
  const [canvasTitle, setCanvasTitle] = useState();
  const handleCanvasTitle = (e) => {
    setCanvasTitle(e);
  };

  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            My bussiness
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Hello, usuario!
                </a>
              </li>
              {location.pathname !== "/" && (
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Productos
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={"#"}
                  onClick={() => handleCanvasTitle("login")}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#canvasExample"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={"#"}
                  onClick={() => handleCanvasTitle("register")}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#canvasExample"
                >
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/logout"}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <RegisterCanvas dataTitle={canvasTitle} />
    </>
  );
}

export default NavBar;

