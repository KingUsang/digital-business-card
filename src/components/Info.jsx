import personImg from './../assets/person.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Info() {
  return (
    <section className="text-center text-white w-full pb-2">
      <img className="rounded-t-2xl" src={personImg} alt="my-photo" />
      <div className="my-6">
        <h3 className="text-2xl font-bold">King Usang</h3>
        <p className="text-orange-300">Frontend Developer</p>
        <a className="text-blue-400 underline"
          href="https://github.com/KingUsang">@kingusang</a>
      </div>
      <div className="w-4/5 flex justify-center m-auto gap-2">
        <button className="w-1/2 flex flex-row gap-2 items-center bg-white py-1
          justify-center rounded text-gray-700">
          <FontAwesomeIcon icon={faEnvelope}/>
          Email
        </button>
        <button className="w-1/2 flex flex-row gap-2 items-center bg-[#5093e2] py-1 
          justify-center rounded text-white">
          <FontAwesomeIcon icon={faLinkedin}/>
          LinkedIn
        </button>
      </div>
    </section>
  )
}