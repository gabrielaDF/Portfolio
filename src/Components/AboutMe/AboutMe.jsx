import { FcBusinesswoman } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const AboutMe = () => {
  return (
    <div className="ml-[18%]  text-blue-200">
      <h2 className="font-serif  text-3xl text-white pt-16 flex">
        <FcBusinesswoman className="mr-2" id="AboutMe" />
        Hola, Soy Gabriela
      </h2>
      <div className="text-center pr-16 pt-5">
        <p>
          Una apasionada Desarrolladora Full Stack con experiencia en el
          emocionante mundo del desarrollo web. Originaria de Venezuela,
          actualmente viviendo en Colombia, mi viaje profesional me ha llevado a
          explorar las profundidades de la ingeniería química(titulada) en el
          área de control de calidad y creación de colores para el plástico.
        </p>
        <br />
        <p>
          Con un trasfondo sólido en metodologías ágiles, GIT, estructura de
          datos y algoritmos, me he sumergido de lleno en el universo del
          desarrollo full stack, abrazando tecnologías como React, Redux,
          Node.js, Express, Sequelize, y PostgreSQL, entre otras. Mi trayectoria
          incluye la construcción de aplicaciones web robustas y funcionales,
          así como la colaboración en proyectos emocionantes que desafían mis
          límites y me impulsan a aprender y crecer continuamente.
        </p>
        <br />
        <p>
          Mi experiencia laboral en Drewili, donde contribuí al desarrollo de un
          sistema de comercio electrónico (eCommerce) desde cero, y mi
          participación como Full Stack Teaching Assistant en Henry Bootcamp,
          donde guié y apoyé a futuros desarrolladores en su viaje de
          aprendizaje, han moldeado mi enfoque hacia la resolución de problemas,
          la comunicación efectiva y la excelencia en el trabajo en equipo.
        </p>
        <br />
        <p>
          Mi pasión por el desarrollo web va más allá de la escritura de código;
          es una búsqueda constante de soluciones creativas, un compromiso con
          la excelencia y una dedicación a construir experiencias digitales
          impactantes y significativas.
        </p>
        <br />
        <p>
          Estoy emocionada por seguir explorando nuevas oportunidades, colaborar
          en proyectos desafiantes y contribuir al crecimiento y éxito de
          equipos y empresas visionarias.
        </p>
        <br />
        <p>
          ¡Conéctate conmigo y descubre cómo podemos colaborar juntos/as para
          hacer realidad tus ideas y objetivos digitales! <br />
          <br />
          <a
            href="https://wa.me/573229209491"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-400"
          >
            <div className=" flex justify-center items-center text-center">
              <FaWhatsapp className="mr-2 text-green-500" />
              WhatsApp : +573229209491
            </div>
          </a>
          <div className=" flex justify-center items-center text-center">
            <MdEmail className="mr-2 " />
            Email: defreitasgabi@gmail.com
          </div>
          ¡Espero saber de ti pronto! 🚀
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
