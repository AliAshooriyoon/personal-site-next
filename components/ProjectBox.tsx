import "./ProjectBox.css";

const ProjectBox = ({ imageAdresse = "fallback" }) => {
  return (
    <div className="bg-none relative project_box w-80 h-80">
      <div
        className="relative w-full h-full rounded-2xl bg-center  inset-0 bg-no-repeat bg-cover opacity-20"
        style={{ backgroundImage: `url('/${imageAdresse}.jpg')` }}
      ></div>
      <div className="absolute z-10 bottom-0 left-0 p-2 rounded-b-2xl w-full bg-stone-300 text-black">
        <div className="flex flex-col items-start gap-2">
          <span className="text-black project_title">ToDo list project</span>
          <span className="text-black project_lang border-2 p-1 rounded-xl text-center">React.js</span>

        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
