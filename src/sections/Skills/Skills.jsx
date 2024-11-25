import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2 className={styles.info}>Backend Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Spring" />
        <SkillList src={checkMarkIcon} skill="RESTful APIs" />
      </div>
      <hr />
      <h2 className={styles.info}>Frontend Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <h2 className={styles.info}>Database Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Hibernate" />
        <SkillList src={checkMarkIcon} skill="Microsoft SQL" />
      </div>
      <hr />
      <h2 className={styles.info}>DevOps & Deployment Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Microsoft Azure" />
        <SkillList src={checkMarkIcon} skill="Jenkins" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
