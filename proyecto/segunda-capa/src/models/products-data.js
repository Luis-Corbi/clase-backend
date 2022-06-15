const data = [
    { id:1, name: "Apple IPhone 13 Pro", price: 1299.99, img: "https://http2.mlstatic.com/D_NQ_NP_840175-MLA47779316482_102021-O.webp",},
    { id:2, name: "Apple IPhone 12 Pro", price: 1099.99, img: "https://http2.mlstatic.com/D_NQ_NP_824876-MLA43975720984_112020-O.webp",},
    { id:3, name: "Samsung Galaxy S21+", price: 849.99,  img: "https://http2.mlstatic.com/D_NQ_NP_976371-MLA45566612445_042021-O.webp",},
    { id:4, name: "Xiaomi Mi 11 Ultra", price: 919.99, img: "https://http2.mlstatic.com/D_NQ_NP_751583-MLA46773535610_072021-O.webp",}
  ];
  
  const recuperarDatos = () => {
    return data;
  };
  
  const guardarDato = (dato) => {
    data.push(dato);
    return data;
  };
  
  module.exports = {
    recuperarDatos,
    guardarDato,
  };
  