import { useEffect, useState } from "react";
import myPhoto from "../../assets/myPhoto.png";
import { FcBusinesswoman } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineMarkunread } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa6";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("AboutMe");
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 768); // Ajusta el valor 768 según sea necesario
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        window.scrollY >= technologiesElement.offsetTop / 3 &&
        window.scrollY < projectsElement.offsetTop &&
        currentSection !== "Tecnologic"
      ) {
        setCurrentSection("Tecnologic");
      } else if (
        window.scrollY >= projectsElement.offsetTop / 3 &&
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
        window.scrollY < contactElement.offsetTop - 200 &&
        currentSection !== "Redes"
      ) {
        setCurrentSection("Redes");
      } else if (
        window.scrollY >= contactElement.offsetTop - 200 &&
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
      className={`fixed left-0 h-screen w-[18 %] bg-slate-900 lg-static transition-all duration-100 ${
        showMenu ? "top-0 " : "-top-full"
      }`}
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
        className={`bg-slate-950 p-8  border-2 border-slate-900 rounded-tr-[100px] h-[70vh] flex-col justify-between gap-8 mt-2 overflow-y-auto`}
      >
        <nav className="flex flex-col gap-8">
          <div>
            <a
              href="#AboutMe"
              className={`flex items-center underline mt-3  mr-6 hover:text-blue-500 ${
                currentSection === "AboutMe" ? "text-white" : "text-violet-300"
              }`}
              onClick={() => handleNavigationClick("AboutMe")}
            >
              <FcBusinesswoman />
              <h2 className="text-base ml-2  font-serif">ACERCA DE MÍ</h2>
            </a>
          </div>
          <div>
            <a
              href="#Tecnologic"
              className={`flex items-center underline mt-3  mr-6 hover:text-blue-500 ${
                currentSection === "Tecnologic"
                  ? "text-white"
                  : "text-violet-300"
              }`}
              onClick={() => handleNavigationClick("Tecnologic")}
            >
              <GiTechnoHeart />
              <h2 className=" text-base ml-2  font-serif">TECNOLOGÍAS</h2>
            </a>
          </div>
          <div>
            <a
              href="#Proyects"
              className={`flex items-center underline mt-3  mr-6 hover:text-blue-500 ${
                currentSection === "Proyects" ? "text-white" : "text-violet-300"
              }`}
              onClick={() => handleNavigationClick("Proyects")}
            >
              <MdWork />
              <h2 className="text-base ml-2  font-serif">PROYECTOS</h2>
            </a>
          </div>
          <div>
            <a
              href="#Certificate"
              className={`flex items-center underline mt-3 text-lg mr-6  hover:text-blue-500 ${
                currentSection === "Certificate"
                  ? "text-white"
                  : "text-violet-300"
              }`}
              onClick={() => handleNavigationClick("Certificate")}
            >
              <FaCertificate />
              <h2 className=" text-base ml-2  font-serif">CERTIFICADOS</h2>
            </a>
          </div>
          <div>
            <a
              href="#Redes"
              className={`flex items-center underline mt-3 text-lg mr-6 hover:text-blue-500 ${
                currentSection === "Redes" ? "text-white" : "text-violet-300"
              }`}
              onClick={() => handleNavigationClick("Redes")}
            >
              <IoShareSocialSharp />
              <h2 className="text-base ml-2  font-serif">REDES SOCIALES</h2>
            </a>
          </div>
          <div>
            <a
              href="#Contacto"
              className={`flex items-center underline mt-4 text-lg mr-6 hover:text-blue-500 ${
                currentSection === "Contacto" ? "text-white" : "text-violet-300"
              }`}
              onClick={() => handleNavigationClick("Contacto")}
            >
              <MdOutlineMarkunread />
              <h2 className=" text-base ml-2  font-serif">CONTÁCTAME</h2>
            </a>
          </div>
        </nav>
        <div className="text-white text-sm flex mt-10 ">
          Creado por:
          <img src="/logoWhite.png" alt="logo" className="w-5 h-auto ml-2" />
        </div>
      </div>
      <div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden fixed left-4 top-4 text-2xl bg-chiliRed p-2.5 rounded-full text-white"
        >
          {showMenu ? <IoCloseSharp /> : <IoMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
