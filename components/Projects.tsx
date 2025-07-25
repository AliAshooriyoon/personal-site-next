import ProjectBox from "./ProjectBox";
import "./projects.css"
const Projects = () => {
  return (
    <>
      <div className="">
        <h3 className="projects_title text-3xl text-left pl-22 pt-32">Meine Projekte</h3>
        <div className="absolute right-4 flex gap-4">
          <div className=" bg-zinc-400  w-10 h-10 rounded-2xl flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" className="size-6 rotate-180">
              <path d="M2.53 3.956A1 1 0 0 0 1 4.804v6.392a1 1 0 0 0 1.53.848l5.113-3.196c.16-.1.279-.233.357-.383v2.73a1 1 0 0 0 1.53.849l5.113-3.196a1 1 0 0 0 0-1.696L9.53 3.956A1 1 0 0 0 8 4.804v2.731a.992.992 0 0 0-.357-.383L2.53 3.956Z" />
            </svg>
          </div>
          <div className=" bg-zinc-400  w-10 h-10 rounded-2xl flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" className="size-6">
              <path d="M2.53 3.956A1 1 0 0 0 1 4.804v6.392a1 1 0 0 0 1.53.848l5.113-3.196c.16-.1.279-.233.357-.383v2.73a1 1 0 0 0 1.53.849l5.113-3.196a1 1 0 0 0 0-1.696L9.53 3.956A1 1 0 0 0 8 4.804v2.731a.992.992 0 0 0-.357-.383L2.53 3.956Z" />
            </svg>
          </div>
        </div>
        <div className="krojects_box flex gap-18 justify-center items-center p-12">
          <ProjectBox technology={'React.js'} title={'ToDo list project'} imageAdresse={'3d-illustration-hand-putting-tick-paper'} />
          <ProjectBox technology={'JavaScript'} title={'Lorem ipsum generator'} imageAdresse={'lorem'} />
          <ProjectBox technology={'React.js'} title={'Shop project'} imageAdresse={"shopLogo"} />
        </div>
      </div>
    </>
  )
}
export default Projects;
