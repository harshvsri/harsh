function Footer() {
  const socials = [
    {
      name: "github",
      link: "https://github.com/harshvsri",
    },
    {
      name: "twitter",
      link: "https://twitter.com/harshvsri",
    },
    {
      name: "ros",
      link: "https://harshsri.bio.link/",
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
                <a className="text-body-secondary" href={social.link}>
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
