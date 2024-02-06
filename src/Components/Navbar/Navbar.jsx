import { useEffect, useState } from "react";
import myPhoto from "../../assets/myPhoto.png";
import { FcBusinesswoman } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineMarkunread } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`fixed left-0 h-screen w-[18 %] bg-blue-900 lg-static transition-all duration-100 ${
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
        className={`bg-indigo-900 p-8  border-2 border-indigo-950 rounded-tr-[100px] h-[70vh] flex-col justify-between gap-8 mt-2 ${
          showMenu ? "overflow-y-hidden" : ""
        }`}
      >
        <nav className="flex flex-col gap-8">
          <div className="flex items-center ">
            <FcBusinesswoman />
            <h2 className="ml-2 text-white font-semibold font-serif">
              ACERCA DE MÍ
            </h2>
          </div>
          <div className="flex items-center text-violet-300">
            <GiTechnoHeart />
            <h2 className="ml-2 text-white font-semibold font-serif">
              TECNOLOGÍAS
            </h2>
          </div>
          <div className="flex items-center text-violet-300">
            <MdWork />
            <h2 className="ml-2 text-white font-semibold font-serif">
              PROYECTOS
            </h2>
          </div>
          <div className="flex items-center text-violet-300">
            <FaCertificate />
            <h2 className="ml-2 text-white font-semibold font-serif">
              CERTIFICADOS
            </h2>
          </div>
          <div className="flex items-center text-violet-300">
            <IoShareSocialSharp />
            <h2 className="ml-2 text-white font-semibol font-serif">REDES</h2>
          </div>
          <div className="flex items-center text-violet-300">
            <MdOutlineMarkunread />
            <h2 className="ml-2 text-white font-semibold font-serif">
              CONTACTO
            </h2>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
