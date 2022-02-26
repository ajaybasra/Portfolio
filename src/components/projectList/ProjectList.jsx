import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some Of My Projects</h1>
        <p className="pl-desc">
          The projects below are non-academic and were completed during my free time to gain exposure to new technologies which I wasn't exposed to at university. I had moments where I wanted to smash my monitor in but I also learnt tons.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList