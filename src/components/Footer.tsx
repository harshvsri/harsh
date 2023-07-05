function Footer() {
  const socials = [
    {
      name: "github",
      link: "",
    },
    {
      name: "twitter",
      link: "",
    },
    {
      name: "ros",
      link: "",
    },
  ];
  return (
    <>
      <div>
        <footer>
          <div>&copy; 2023 Harsh V Srivastava</div>

          <ul className="social-links">
            {socials.map((social, index) => (
              <li key={index} className="social-link list-unstyled">
                <a className="text-body-secondary" href="#">
                  <iconify-icon
                    className="small"
                    icon={`devicon:${social.name}`}
                  ></iconify-icon>
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
