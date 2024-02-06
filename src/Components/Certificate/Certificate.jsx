import { FaCertificate } from "react-icons/fa6";
import React from "react";

const Certificate = () => {
  return (
    <div className="ml-[20%] mr-auto max-w-screen-lg pb-10">
      <h2 className="font-serif text-3xl text-white pt-16 flex">
        <FaCertificate className="mr-2" />
        Certificados
      </h2>
      <div className="max-w-[70rem] h-auto mt-8">
        <div className="flex justify-center">
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976603/Certificado%201.png"
            alt="certificado"
          />
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976668/Certificado%202.png"
            alt="certificado"
          />
        </div>

        <div className="flex justify-center mt-2">
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976804/Certificado%203.png"
            alt="certificado"
          />
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976949/Certificado%204.png"
            alt="certificado"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
