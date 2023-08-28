import { BsGithub, BsLinkedin } from "react-icons/bs";

const ExternalLinks = () => {
  return (
    // Add Transition
    <ul className="flex ml-1 mt-8 items-center">
      <li className="mr-5">
        <a
          href="https://github.com/kushalgoel786"
          className="hover:text-slate-200"
          target="_blank">
          <BsGithub className="h-6 w-6" />
        </a>
      </li>
      {/* Replace Icon */}
      <li>
        <a
          href="https://www.linkedin.com/in/kushal-goel/"
          className="hover:text-slate-200"
          target="_blank">
          <BsLinkedin className="h-6 w-6" />
        </a>
      </li>
    </ul>
  );
};

export default ExternalLinks;
