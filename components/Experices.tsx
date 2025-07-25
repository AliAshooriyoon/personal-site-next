"use client"
import { useState } from "react"
import "./Experices.css"
import { expericesData } from "@/expericesData"
const Experices = () => {
  console.log(expericesData)
  const [selectedEx, setSelectedEx] = useState(1);
  return (
    <>
      <div className="bg-[rgb(21,19,19,56%)] py-24 px-12">
        <p className="title_experices text-4xl">Berufliche Erfahrungen</p>
        <div className="main_experices flex items-center flex-row justify-start">
          <div className="names_experices list-none flex  flex-col gap-12 p-8 w-80">
            <li onClick={() => setSelectedEx(1)} className={` ${selectedEx == 1 ? "selected flex items-center justify-around" : ""}
        name_experices  border-2 p-2 rounded-lg cursor-pointer`}>Code Amooz
              {selectedEx == 1 && <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
                </svg>
              </span>}
            </li>
            <li onClick={() => setSelectedEx(2)} className={` ${selectedEx == 2 ? "selected flex items-center justify-around" : ""}
              name_experices border-2 p-2 rounded-lg
               cursor-pointer `}>Sepahanyadaki
              {selectedEx == 2 && <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
                </svg>
              </span>}
            </li>
          </div>
          <div className="details_experices pl-28 flex flex-col gap-2 pt-12">
            <p className="details_title text-xl text-[#9ec5d5]">Ausbildung als Frontend Developer</p>
            <p className="place_details   text-sm">Iran, Isfahan</p>
            <span className="date_details text-sm">Juni 2024 - Sep. 2024</span>
            <div className="btns_details flex gap-4">
              <button>JavaScript</button>
              <button>React.js</button>
            </div>
            <div className="tasks_details list-none flex gap-4 flex-col pt-4">
              <li className="task_details"> React js aus Udemy lernen</li>
              <li className="task_details"> Verschiedene Seiten durch React zeichnen.</li>
              <li className="task_details"> Analyse die Seiten </li>
              <li className="task_details"> Kreative Projekte erstellen</li>
              <li className="task_details">Design Seiten durch Figma und Gimp</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Experices;
