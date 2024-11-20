import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"; 

export default function Home() {
  return (
    <div className="mt-12">
      <div className="flex h-[700px] w-[1200px]">
        <div className="flex-1 "></div>
        <div className="flex-1 "></div>
      </div>
      <div className="flex justify-center h-[300px] w-[1200px]">
        <div className="flex justify-center h-16 w-64 bg-white">
          <a href="https://github.com/xiguamee"><FontAwesomeIcon icon={faGithub} className="h-10 w-10 px-3"/></a>
          <a><FontAwesomeIcon icon={faXTwitter} className="h-10 w-10 px-3"/></a>
        </div>
      </div>
    </div>
  );
}
