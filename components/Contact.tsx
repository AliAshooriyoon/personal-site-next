"use client"
import { Element } from "react-scroll";
const Contact = () => {
  return (
    <>
      <Element name='contact' className="">
        <div className="info px-10 py-18 flex flex-col gap-10">
          <p className="title_info text-3xl">Möchten Sie mit mir Kontakt knüpfen ?</p>
          <div className="phone_box flex justify-start gap-4 items-center">
            <div className="phone_logo w-12 h-12 bg-[#9ec5d5] flex justify-center items-center rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <p className="phone flex flex-col">
              <span className="text-stone-500 text-sm">Handynummer</span>
              <span className="text-xl">0913***33</span>
            </p>
          </div>
          <div className="mail_box flex justify-start gap-4 items-center">
            <div className="mail_logo w-12 h-12 bg-[#9ec5d5] flex justify-center items-center rounded-xl">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
              </svg>

            </div>
            <p className="mail flex flex-col">
              <span className="text-stone-500 text-sm">E-Mail Adresse</span>
              <span className="text-xl">aliashooriyoon@yahoo.com</span>
            </p>
          </div>
          <div className="adresse_box flex justify-start gap-4 items-center">
            <div className="adresse_logo w-12 h-12 bg-[#9ec5d5] flex justify-center items-center rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <p className="adresse flex flex-col">
              <span className="text-stone-500 text-sm">Adresse</span>
              <span className="text-xl">Iran, Isfahan</span>
            </p>
          </div>
        </div>
      </Element>
    </>
  )
}
export default Contact;
