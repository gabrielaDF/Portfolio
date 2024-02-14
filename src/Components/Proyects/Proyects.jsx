import { MdWork } from "react-icons/md";
const Proyects = () => {
  return (
    <div className="ml-[20%]  text-blue-200  ">
      <h2 id="Proyects" className="font-serif  text-3xl text-white pt-16 flex">
        <MdWork className="mr-2" /> Proyectos
      </h2>
      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl mb-4 font-bold text-white">
          E-commers de Tecnología DREWILI{" "}
        </h2>
        <p className="w-[60%] ">
          Sistema de comercio electrónico (e-Commerce) creado para una empresa
          de Perú, que permite a los usuarios explorar, buscar y comprar
          productos de diferentes categorías. Proporciona funcionalidades clave
          como carrito de compras, gestión de usuarios, filtrado de productos y
          más.
        </p>
        <div className="flex">
          <a
            href="https://github.com/drewilipf/drewili-pf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline mt-4 text-lg mr-6 hover:text-blue-600"
          >
            Ver Repositorio
          </a>
          <a
            href="https://drewili.com.pe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline mt-4 text-lg hover:text-blue-600"
          >
            Ver Página Web
          </a>
        </div>

        <img
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1707253024/Drewili_1_q9rx3n.png"
          alt="Drewili"
          className="w-[90%] h-auto"
        />
      </div>
      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl mb-4 font-bold text-white">
          Conociendo los Países
        </h2>
        <p className="w-[60%] ">
          Aplicación full stack web dedicada a los países, permite a los
          usuarios explorar y descubrir información sobre diferentes países a
          través de una interfaz intuitiva. Desarrolle el backend utilizando
          Node.Js y Express como framework, cree una base de datos usando
          PostgreSQL y Sequelize como ORM. El backend proporciona endpoints para
          realizar el CRUD en la DB. Implementé rutas y controladores en Express
          para manejar las solicitudes HTTP entrantes y conecté estas rutas a
          funciones específicas en los controladores. Para el desarrollo
          Frontend use React.Js para la estructura y componentes y Redux para el
          manejo de los estados globales. La UI de la App fue hecha con Css
          puro, incluyendo las animaciones y efectos.
        </p>
        <div className="flex">
          <a
            href="https://github.com/gabrielaDF/cr-pi-countries-main"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline mt-4 text-lg mr-6 hover:text-blue-600"
          >
            Ver Repositorio
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1707251323/Pi_Countries_eicywl.png"
          alt="Pi-Countries"
          className="w-[90%] h-auto"
        />
      </div>
      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl mb-4 font-bold text-white">Rick and Morty </h2>
        <p className="w-[60%] ">
          La aplicación Rick and Morty es una plataforma que permite a los
          usuarios explorar información sobre los personajes y ubicaciones de la
          serie. Los fanáticos de Rick and Morty podrán navegar a través de una
          interfaz intuitiva y descubrir datos interesantes sobre sus personajes
          favoritos.
        </p>
        <div className="flex">
          <a
            href="https://github.com/pi-rym/PI-gabrielaDF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline mt-4 text-lg mr-6 hover:text-blue-600"
          >
            Ver Repositorio
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1707253205/Rick_and_Morty_1_s3u92u.png"
          alt="Rick and Morty"
          className="w-[90%] h-auto"
        />
      </div>
    </div>
  );
};
export default Proyects;
