"use client"
import ProjectBox from "./ProjectBox";
import "./projects.css"
import { Element } from "react-scroll"
type projectProps = {
  dict: {
    title: string
  }
}
const Projects = ({ dict }: projectProps) => {
  return (
    <>
      <Element className="py-32" name='projects'>
        <h3 className="projects_title text-3xl md:text-left md:pl-22 max-md:text-center">{dict.title}</h3>
        <div className="absolute right-20 gap-4 hidden">
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
        <div className="projects_box flex-wrap max-md:flex-col flex gap-18 justify-center items-center p-12">
          <ProjectBox linkOnGit={'https://github.com/AliAshooriyoon/todoList'} technology={'React.js'} title={'ToDo list project'} imageAdresse={'ToDo'} />
          <ProjectBox linkOnGit={'https://github.com/AliAshooriyoon/LoremIpsumGenerator'} technology={'JavaScript'} title={'Lorem ipsum generator'} imageAdresse={'lorem'} />
          <ProjectBox linkOnGit={'https://github.com/AliAshooriyoon/onlineShop'} technology={'React.js'} title={'Shop project'} imageAdresse={"shopLogo"} />
        </div>
      </Element>
    </>
  )
}
export default Projects;
