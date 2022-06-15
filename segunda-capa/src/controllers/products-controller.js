import { obtenerDatos, crearDato } from "../services/products-services";

const getDatosControllers = async (req, res) => {
  // Armo logica de peticion
  let datos = await obtenerDatos();
  res.json(datos);
};

const postDatosControllers = async (req, res) => {
  let dato = req.body;
  await crearDato(dato);
  res.json(dato);
};

module.exports = {
  getDatosControllers,
  postDatosControllers,
};
