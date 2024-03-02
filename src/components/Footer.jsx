import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="bg-[#161619] py-4 w-full flex justify-center gap-4">
      <FontAwesomeIcon icon={faTwitterSquare} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faGithubSquare} />
    </div>
  )
}