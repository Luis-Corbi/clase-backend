import { recuperarDatos, guardarDato } from "../models/products-data";

const obtenerDatos = async () => {
  // logica
  return await recuperarDatos();
};

const crearDato = async (dato) => {
  // logica
  //   dato.id = Math.random();
  await guardarDato(dato);
  return dato;
};

module.exports = {
  obtenerDatos,
  crearDato,
};
