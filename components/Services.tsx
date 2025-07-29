"use client"
import "./Services.css"
import ServicesBox from "./ServicesBox"
import { Element } from "react-scroll"
type ServiceProps = {
  dict: {
    what: string,
    title1: string,
    title2: string,
    title3: string,
  }
}
const Services = ({ dict }: ServiceProps) => {
  return (
    <>
      <Element name='services' className="w-full bg-[rgb(21,19,19,56%)] text-center py-28">
        <h3 className='text-4xl pb-8'>{dict.what}</h3>
        <div className="services_boxes flex gap-20 justify-center p-4">
          <ServicesBox dict={dict} title={dict.title1} />
          <ServicesBox dict={dict} title={dict.title2} />
          <ServicesBox dict={dict} title={dict.title3} />
        </div>
      </Element>
    </>
  )
}
export default Services;
