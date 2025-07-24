import "./Services.css"
import ServicesBox from "./ServicesBox"
const Services = () => {
  return (
    <>
      <div className="w-full bg-[rgb(21,19,19,56%)] text-center py-28">
        <h3 className='text-4xl pb-8'>Profi in</h3>
        <div className="services_boxes flex gap-20 justify-center p-4">
          <ServicesBox title={'Webseite erstellen'} />
          <ServicesBox title={'Seite zeichnen'} />
          <ServicesBox title={'Linux'} />
        </div>
      </div>
    </>
  )
}
export default Services;
