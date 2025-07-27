import Image from "next/image"
import myPic from "@/public/ChatGPT_Image_Jul_24__2025__12_11_30_AM-removebg-preview.png"
export const Main = () => {
  return (
    <>
      <div className="flex pt-20 px-36 pb-36 justify-around">
        <div className="main_text">
          <h1 className="text-4xl mb-6">Ali <span className="text-[#023E6F]">Ashouriyoun</span> </h1>
          <h2 className="max-w-[32rem] leading-8">
            Ich bin Ali, 18 Jahre alt und arbeite als Frontend-Entwickler.
            Ich interessiere mich nicht nur für Frontend, sondern auch
            für Linux und die Programmiersprache Python. Diese Webseite ist meine
            persönliche Seite, die mit Next.js erstellt wurde,
            um einen besseren Einblick in mich zu geben.
          </h2>
          <div className="logos_networking"></div>
        </div>
        <div className="picture_box">
          <div className="w-72 h-96 bg-[#023E6F] rounded-2xl -rotate-14">
            <div className="relative w-72 h-96 bg-stone-400 rounded-2xl rotate-14 overflow-hidden">
              <Image className="absolute -bottom-8 -left-5 h-[90%] w-[80%] rounded-2xl opacity-85 " src={myPic} alt="myPic" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

