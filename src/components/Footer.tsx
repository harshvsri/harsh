function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; 2023 Harsh V Srivastava
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <iconify-icon
                  className="small"
                  icon="mdi:twitter"
                ></iconify-icon>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <iconify-icon
                  className="small"
                  icon="mdi:linkedin"
                ></iconify-icon>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <iconify-icon
                  className="small"
                  icon="ph:link-fill"
                ></iconify-icon>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
