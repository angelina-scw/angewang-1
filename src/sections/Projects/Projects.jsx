import styles from './ProjectsStyles.module.css';
import courseHub from '../../assets/courseHub.png';
import starbucksTool from '../../assets/starbucksTool.png';
import homey from '../../assets/homey.png';
import ProjectCard from '../../common/ProjectCard';
import pandemicMap from '../../assets/pandemicMap.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={courseHub}
          link="https://drive.google.com/file/d/1h3d6LgiUrTCoiIwM5lf7MjnoN5p0q-Vl/view?usp=drive_link"
          h3="CourseHub"
          p="Course Enrollment System"
        />
        <ProjectCard
          src={pandemicMap}
          link="https://github.com/angelina-scw/covidmap-frontend-project"
          h3="PandemicMap"
          p="COVID-19 Tracker"
        />
        <ProjectCard
          src={starbucksTool}
          link="https://github.com/angelina-scw"
          h3="Starbucks Tool"
          p="Comparison Web Application"
        />
        <ProjectCard
          src={homey}
          link="https://github.com/angelina-scw"
          h3="HomeyB&B"
          p="Global Web Design"
        />
      </div>
    </section>
  );
}

export default Projects;
