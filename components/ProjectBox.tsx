import Image from "next/image";
import "./ProjectBox.css";
import lorem from "@/public/lorem.jpg"
import ToDo from "@/public/3d-illustration-hand-putting-tick-paper.jpg"
import shop from "@/public/shopLogo.jpg"
const ProjectBox = ({ imageAdresse, title, technology, linkOnGit }) => {
  console.log(imageAdresse)
  return (
    <a href={linkOnGit} target="_blank">
      <div className="bg-none relative project_box max-md:w-72 md:w-80 h-80 cursor-pointer ">
        <div
          className="test relative w-full h-full rounded-2xl bg-center inset-0 bg-no-repeat bg-cover opacity-20"
          style={{ backgroundImage: `url('${imageAdresse}.jpg')` }}

        >
          <Image className="w-full h-full rounded-2xl" src={imageAdresse == "ToDo" ? ToDo : imageAdresse == 'lorem' ? lorem : shop} alt='' width={300} height={300} />
        </div>
        <div className="absolute z-10 bottom-0 left-0 p-4 rounded-b-2xl w-full bg-stone-300 text-black">
          <div className="flex flex-col items-start gap-2">
            <span className="text-black project_title">{title}</span>
            <span className="text-black project_lang border-2 border-stone-500 py-1 px-3 rounded-xl text-[0.7rem] text-center">{technology}</span>

          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectBox;
