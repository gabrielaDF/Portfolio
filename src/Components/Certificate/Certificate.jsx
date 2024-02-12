import { FaCertificate } from "react-icons/fa6";
import { useState } from "react";
import React from "react";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className="ml-[20%] mr-auto max-w-screen-lg pb-10">
      <h2
        id="Certificate"
        className="font-serif text-3xl text-white pt-16 flex"
      >
        <FaCertificate className="mr-2" />
        Certificados
      </h2>
      <div className="max-w-[70rem] h-auto mt-8">
        <div className="flex justify-center">
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150 cursor-pointer"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976603/Certificado%201.png"
            alt="certificado"
            onClick={() =>
              openImage(
                "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976603/Certificado%201.png"
              )
            }
          />
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976668/Certificado%202.png"
            alt="certificado"
            onClick={() =>
              openImage(
                "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976668/Certificado%202.png"
              )
            }
          />
        </div>

        <div className="flex justify-center mt-2">
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976804/Certificado%203.png"
            alt="certificado"
            onClick={() =>
              openImage(
                "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976804/Certificado%203.png"
              )
            }
          />
          <img
            className="w-72 h-auto mr-20 transition-transform transform hover:scale-150"
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1706976949/Certificado%204.png"
            alt="certificado"
            onClick={() =>
              openImage(
                "https://res.cloudinary.com/dn6wibef0/image/upload/v1706976949/Certificado%204.png"
              )
            }
          />
        </div>
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
          <div className="max-w-3xl max-h-full p-4 bg-white rounded-lg overflow-auto">
            <img
              src={selectedImage}
              alt="certificado"
              onClick={closeImage}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
