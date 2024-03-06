import { Icon } from "@iconify/react";

function Footer() {
  const currYear = new Date().getFullYear();
  const socials = [
    {
      name: "octicon:logo-github-16",
      link: "https://github.com/harshvsri",
    },
    {
      name: "logos:twitter",
      link: "https://twitter.com/harshvsri",
    },
    {
      name: "logos:linkedin",
      link: "https://www.linkedin.com/in/harshvsri/",
    },
    {
      name: "logos:google-gmail",
      link: "mailto:harshvsri@gmail.com",
    },
  ];
  return (
    <>
      <div>
        <footer id="contact">
          <p>&copy; {currYear} Harsh V Srivastava</p>

          <ul className="social-links">
            {socials.map((social, index) => (
              <li key={index} className="social-link list-unstyled">
                <a className="text-body-secondary" href={social.link}>
                  <Icon className="icon" icon={social.name} />
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
