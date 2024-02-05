import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Tecnologic from "./Components/Tecnologic/Tecnologic";
import Redes from "./Components/Redes/Redes";
import Certificate from "./Components/Certificate/Certificate";
import Contacto from "./Components/Contacto/Contacto";
import Proyects from "./Components/Proyects/Proyects";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-950 to-black h-full">
        <Navbar />
        <AboutMe />
        <Tecnologic />
        <Proyects />
        <Certificate />
        <Redes />
        <Contacto />
      </div>
    </>
  );
}

export default App;
