import { ReactComponent as GithubIcon } from "assets/img/github.svg"
import "./styles.css"

const Nav = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/Lucas-Silva-Amaral"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Lucas-Silva-Amaral</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Nav
