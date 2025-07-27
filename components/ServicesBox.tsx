const ServicesBox = ({ title }) => {
  return (<>
    <div className="services_box p-4">
      <div className='logo_box flex justify-center items-center pt-[20%]'>
        <div className="logo_service w-14 h-14 bg-[rgb(0,117,149,30%)] max-auto rounded-2xl flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>

        </div>
      </div>
      <p className="title_service text-black pt-4 text-xl">{title}</p>
      <p className="info_service text-stone-600 text-sm pt-2 indent-3 max-w-[90%] mx-auto ">
        <span className="text-lg max-w-[90%]">
          {title == "Webseiten erstellen" ? "Webseiten durch NextJS, ReactJS, JavaScript, TailWind, CSS und HTML erstellen"
            : title == "Seiten zeichnen" ? "Seiten durch Figma, Gimp, Krita und Luancy zeichnen" : "Linux als OS verwenden und es in manchen Bereichen verwenden, LPIC 1"}
        </span>
      </p>
    </div>

  </>)
}
export default ServicesBox;
