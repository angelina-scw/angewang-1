import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import callLight from '../../assets/call-light.svg';
import callDark from '../../assets/call-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/AngelinaWang_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const callIcon = theme === 'light' ? callDark : callLight;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Angelina Wang"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h2>Hello! I'm</h2>
        <h1>Angelina Wang</h1>
        <h2>Software Engineer</h2>
        <span>
          <a
            href="https://calendar.app.google/LtTeRLHos1t97upN9"
            target="_blank"
          >
            <img src={callIcon} alt="Call icon" />
          </a>
          <a href="https://github.com/angelina-scw" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/angelinawang-sw/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I specialize in building scalable, high-performance applications that
          drive business growth and enhance user experience.
        </p>
        <a href={CV} download>
          <button className="hover">Hire Me</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
