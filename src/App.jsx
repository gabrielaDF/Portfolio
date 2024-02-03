import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Tecnologic from "./Components/Tecnologic/Tecnologic";
import Redes from "./Components/Redes/Redes";
import Certificate from "./Components/Certificate/Certificate";

function App() {
  const imageUrls = [
    "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976603/Certificado%201.png",
    "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976668/Certificado%202.png",
    "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976804/Certificado%203.png",
    "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976949/Certificado%204.png",
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-950 to-black h-full">
        <Navbar />
        <AboutMe />
        <Redes />
        <Tecnologic />
        <Certificate imageUrls={imageUrls} />
      </div>
    </>
  );
}

export default App;
