import { MdWork } from "react-icons/md";
const Proyects = () => {
  return (
    <div className="ml-[20%]  text-blue-200">
      <h2 className="font-serif  text-3xl text-white pt-16 flex">
        <MdWork className="mr-2" /> Proyectos
      </h2>
      <div>
        <img
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1707253024/Drewili_1_q9rx3n.png"
          alt="Drewili"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1707251323/Pi_Countries_eicywl.png"
          alt="Pi-Countries"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1707253205/Rick_and_Morty_1_s3u92u.png"
          alt="Rick and Morty"
        />
      </div>
    </div>
  );
};
export default Proyects;
