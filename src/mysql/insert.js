import options from "./options/mysqlconfig.js";
import knex from "knex";

const database = knex(options);
const productos =[
    { name: "Apple IPhone 13 Pro", price: 1299.99, img: "https://http2.mlstatic.com/D_NQ_NP_840175-MLA47779316482_102021-O.webp",},
    { name: "Apple IPhone 12 Pro", price: 1099.99, img: "https://http2.mlstatic.com/D_NQ_NP_824876-MLA43975720984_112020-O.webp",},
    { name: "Samsung Galaxy S21+", price: 849.99,  img: "https://http2.mlstatic.com/D_NQ_NP_976371-MLA45566612445_042021-O.webp",},
    { name: "Xiaomi Mi 11 Ultra", price: 919.99, img: "https://http2.mlstatic.com/D_NQ_NP_751583-MLA46773535610_072021-O.webp",}
]
database('basebackend').insert(productos)
.then(console.log)
.catch(console.log)
.finally(()=>database.destroy())