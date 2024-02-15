import { IoShareSocialSharp } from "react-icons/io5";

const Redes = () => {
  return (
    <div className="ml-[20%] pb-8 sm:ml-0">
      <h1 id="Redes" className="font-serif  text-3xl text-white pt-16 flex">
        <IoShareSocialSharp className="mr-2" />
        Redes
      </h1>
      <div className="flex mt-4 justify-center">
        <a
          href="https://github.com/gabrielaDF"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
            alt="gitHub"
            className="bg-fuchsia-200 rounded mr-4 w-24 h-24 transition-transform transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriela-de-freitas-m/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original-wordmark.svg"
            alt="linkedin"
            className="bg-fuchsia-200 rounded mr-4 w-24 h-24 transition-transform transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};
export default Redes;
