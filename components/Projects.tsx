import ProjectBox from "./ProjectBox";
import "./projects.css"
const Projects = () => {
  return (
    <>
      <div className="">
        <h3 className="projects_title text-3xl text-left pl-22 pt-32">Meine Projekte</h3>
        <div className="krojects_box flex gap-18 justify-center items-center p-12">
          <ProjectBox imageAdresse={'3d-illustration-hand-putting-tick-paper'} />
          <ProjectBox imageAdresse={'lorem'} />
          <ProjectBox imageAdresse={"shopLogo"} />
        </div>
      </div>
    </>
  )
}
export default Projects;
