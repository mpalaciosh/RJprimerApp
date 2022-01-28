import imagen from "./imagenes/00.jpg"
export const PRODUCTOS =[
    {
    id:0,
    imag: imagen,
    nombre:"Vestido Peppa", 
    descripcion:"vestido azul y tul",
    precio:60, 
    stock:10,
    },
    {
    id:1,
    nombre:'Vestido Kitty', 
    descripcion:'vestido rosa',
    precio:60, 
    stock:8,
    },
    {
    id:2,
    nombre:'Conjunto Coral', 
    descripcion:'Conjunto 3 piezas',
    precio:80, 
    stock:18,
    },
    {
        id:3,
        nombre:'Conjunto Cara Minie', 
        descripcion:'tela super fresca',
        precio:55, 
        stock:6,
    },
    {
        id:4,
        nombre:'Conjunto Minie Azul', 
        descripcion:'Manga larga',
        precio:60, 
        stock:15,
    },
  ];


 export function getProductos() {
 return new Promise((resolve, reject)=>{
  setTimeout(()=> resolve(PRODUCTOS),2000);
  });
}