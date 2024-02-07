import { useEffect, useState } from "react";
import myPhoto from "../../assets/myPhoto.png";
import { FcBusinesswoman } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineMarkunread } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa6";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("AboutMe");

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById("AboutMe");
      const technologiesElement = document.getElementById("Tecnologic");
      const projectsElement = document.getElementById("Proyects");
      const certificationsElement = document.getElementById("Certificate");
      const socialMediaElement = document.getElementById("Redes");
      const contactElement = document.getElementById("Contacto");

      if (
        window.scrollY < technologiesElement.offsetTop &&
        currentSection !== "AboutMe"
      ) {
        setCurrentSection("AboutMe");
      } else if (
        window.scrollY >= technologiesElement.offsetTop &&
        window.scrollY < projectsElement.offsetTop &&
        currentSection !== "Tecnologic"
      ) {
        setCurrentSection("Tecnologic");
      } else if (
        window.scrollY >= projectsElement.offsetTop &&
        window.scrollY < certificationsElement.offsetTop &&
        currentSection !== "Proyects"
      ) {
        setCurrentSection("Proyects");
      } else if (
        window.scrollY >= certificationsElement.offsetTop &&
        window.scrollY < socialMediaElement.offsetTop &&
        currentSection !== "Certificate"
      ) {
        setCurrentSection("Certificate");
      } else if (
        window.scrollY >= socialMediaElement.offsetTop &&
        window.scrollY < contactElement.offsetTop &&
        currentSection !== "Redes"
      ) {
        setCurrentSection("Redes");
      } else if (
        window.scrollY >= contactElement.offsetTop &&
        currentSection !== "Contacto"
      ) {
        setCurrentSection("Contacto");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);
  const handleNavigationClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`fixed left-0 h-screen w-[18 %] bg-blue-900 lg-static transition-all duration-100`}
    >
      <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
        <div className="w-40 h-40 rounded-full mt-2  border-4 border-fuchsia-950">
          <img
            src={myPhoto}
            alt="myPhoto"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <h1 className="text-slate-200 text-2xl font-bold underline font-serif">
          Gabriela De Freitas
        </h1>
      </div>
      <div
        className={`bg-indigo-900 p-8  border-2 border-indigo-950 rounded-tr-[100px] h-[70vh] flex-col justify-between gap-8 mt-2 overflow-y-auto`}
      >
        <nav className="flex flex-col gap-8">
          <div
            className={`flex items-center ${
              currentSection !== "AboutMe" ? "text-white" : "text-violet-300"
            }`}
          >
            <a
              href="#AboutMe"
              className="text-white underline mt-4  mr-6 flex items-center"
              onClick={() => handleNavigationClick("AboutMe")}
            >
              <FcBusinesswoman />
              <h2 className="text-base ml-2  font-serif">ACERCA DE MÍ</h2>
            </a>
          </div>
          <div
            className={`flex items-center ${
              currentSection === "Tecnologic" ? "text-white" : "text-violet-300"
            }`}
          >
            <a
              href="#Tecnologic"
              className="text-white underline mt-4  mr-6 flex items-center"
              onClick={() => handleNavigationClick("Tecnologic")}
            >
              <GiTechnoHeart />
              <h2 className=" text-base ml-2  font-serif">TECNOLOGÍAS</h2>
            </a>
          </div>
          <div
            className={`flex items-center ${
              currentSection === "Projects" ? "text-white" : "text-violet-300"
            }`}
          >
            <a
              href="#Proyects"
              className="text-white underline mt-4 text-lg mr-6 flex items-center"
              onClick={() => handleNavigationClick("Proyects")}
            >
              <MdWork />
              <h2 className="text-base ml-2  font-serif">PROYECTOS</h2>
            </a>
          </div>
          <div
            className={`flex items-center ${
              currentSection === "Certificate"
                ? "text-white"
                : "text-violet-300"
            }`}
          >
            <a
              href="#Certificate"
              className="text-white underline mt-4 text-lg mr-6 flex items-center"
              onClick={() => handleNavigationClick("Certificate")}
            >
              <FaCertificate />
              <h2 className=" text-base ml-2  font-serif">CERTIFICADOS</h2>
            </a>
          </div>
          <div
            className={`flex items-center ${
              currentSection === "Redes" ? "text-white" : "text-violet-300"
            }`}
          >
            <a
              href="#Redes"
              className="text-white underline mt-4 text-lg mr-6 flex items-center"
              onClick={() => handleNavigationClick("Redes")}
            >
              <IoShareSocialSharp />
              <h2 className="text-base ml-2  font-serif">REDES SOCIALES</h2>
            </a>
          </div>
          <div
            className={`flex items-center ${
              currentSection === "Contacto" ? "text-white" : "text-violet-300"
            }`}
          >
            {" "}
            <a
              href="#Contacto"
              className="text-white underline mt-4 text-lg mr-6 flex items-center"
              onClick={() => handleNavigationClick("Contacto")}
            >
              <MdOutlineMarkunread />
              <h2 className=" text-base ml-2  font-serif">CONTACTO</h2>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
