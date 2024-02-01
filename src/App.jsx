import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Tecnologic from "./Components/Tecnologic/Tecnologic";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-950 to-black h-screen">
        <Navbar />
        <AboutMe />
        <Tecnologic />
      </div>
    </>
  );
}

export default App;
