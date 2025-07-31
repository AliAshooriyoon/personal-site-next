import Image from "next/image"
import myPic from "@/public/ChatGPT_Image_Jul_24__2025__12_11_30_AM-removebg-preview.png"
type MainProps = {
  dict: {
    details: string
  }
}
export const Main = ({ dict }: MainProps) => {

  return (
    <>
      <div className="flex pt-20 md:px-36 md:pb-36 gap-16 w-full justify-around max-md:flex-col-reverse max-md:gap-12">
        <div className="main_text">
          <h1 className="text-4xl mb-6 flex gap-4 flex-wrap pl-4"> <span className="indent-2">Ali</span> <span className="text-[#023E6F]">Ashouriyoun</span> </h1>
          <h2 className="max-w-[32rem] leading-8 max-sm:px-4 py-2 lg:text-xl max-sm:text-md">
            {dict.details}
            {/* Ich bin Ali, 18 Jahre alt und arbeite als Frontend-Entwickler. */}
            {/* Ich interessiere mich nicht nur für Frontend, sondern auch */}
            {/* für Linux und die Programmiersprache Python. Diese Webseite ist meine */}
            {/* persönliche Seite, die mit Next.js erstellt wurde, */}
            {/* um einen besseren Einblick in mich zu geben. */}
          </h2>
          <div className="logos_networking"></div>
        </div>
        <div className="picture_box max-sm:w-full  max-sm:flex justify-center items-center">
          <div className="w-72  max-sm:w-60 max-[320px]:w-52 h-96 mx-auto  bg-[#023E6F] rounded-2xl -rotate-14">
            <div className="relative max-[320px]:w-52 max-sm:right-1/2 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-[99%]  w-72 h-96 bg-stone-400 rounded-2xl rotate-14 overflow-hidden">
              <Image className="absolute -bottom-8 -left-5 h-[90%] w-[80%] rounded-2xl opacity-85 " src={myPic} alt="myPic" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

