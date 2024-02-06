import { MdOutlineMarkunread } from "react-icons/md";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pqiiryj",
        "template_art0qvl",
        e.target,
        "V3KspsLNmBDlZGhIE"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Mensaje enviado",
            icon: "success",
            confirmButtonText: "Continuar",
            confirmButtonColor: "#2563eb",
          });
          setFormData({ name: "", email: "", issue: "", message: "" });
        },
        (error) => {
          Swal.fire({
            title: "Error al enviar el mensaje",
            text: "Por favor, intenta nuevamente más tarde",
            icon: "error",
            confirmButtonText: "Continuar",
            confirmButtonColor: "#2563eb",
          });
        }
      );
  };

  return (
    <div className="ml-[18%]  mt-16">
      <div className="text-black">
        <h2 className="font-serif text-3xl text-white flex items-center">
          <MdOutlineMarkunread className="mr-2" /> Contactame
        </h2>
        <div className="border border-gray-300 rounded p-8 w-full max-w-md ml-[30%]">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="Name"
                className="block text-gray-400 font-bold mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="block text-gray-400 font-bold mb-2"
              >
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Issue"
                className="block text-gray-400 font-bold mb-2"
              >
                Asunto
              </label>
              <input
                type="text"
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Message"
                className="block text-gray-400 font-bold mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 h-32 resize-none w-full"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
