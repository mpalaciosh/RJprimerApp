import { Outlet } from "react-router-dom";
import { getFirestore } from "../firebase";

const PRODUCTS =[

    {

        "imag": "https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/271711424_6924222927650054_5971175795114843960_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFgNHWtB1UNQh7PVxyNy1pmabhU-IfswZ1puFT4h-zBnTi7BBZ2Bq2ov4ZyludYUzI&_nc_ohc=dxkZ23peelAAX9TS7V1&_nc_ht=scontent.flim2-1.fna&oh=00_AT_iIhumzaR7oFHtaLBDdTfGNizf1YpAAzqWvgil8-nJxw&oe=6208E2D3",
        "nombre":"Conjunto Cara Minie", 
        "descripcion":"tela super fresca",
        "talla": "Standard",
        "precio":55,  
        "stock":6,
        "catId":2
    },
    {

        "imag": "https://scontent.flim2-2.fna.fbcdn.net/v/t45.5328-4/p960x960/158124341_3937115893015542_4439329891070795611_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeEfYWK2Dx20NHiRlS8Sq5T-X_9npGKL9VFf_2ekYov1UfJkpd1Q4ygA5O-o3vP4-qE&_nc_ohc=mOzHVDfFBLQAX_NtGx4&_nc_ht=scontent.flim2-2.fna&oh=00_AT9yrKNkD7R3tnrxwKSEpr4ADlxnRgaNgsoCblFFFEbqiA&oe=62072A13",
        "nombre":"Conjunto Minie Azul", 
        "descripcion":"Manga larga",
        "talla": "12 meses, 18 meses",
        "precio":60, 
        "stock":15,
        "catId":2
    },
    {

        "imag": "https://evidientemente.files.wordpress.com/2016/10/dedal-de-silicona.jpg",
        "nombre":"Cepillo Silicona", 
        "descripcion":"Cepillo dental de silicona, ideal para limpiar encillas y dientes del bebe sin latimar su encia",
        "talla": "Rojo - Azul - Negro",
        "precio":12, 
        "stock":15,
        "catId":3
    },
    {

        "imag": "https://cdnv2.moovin.com.br/cegonhaencantada/imagens/produtos/original/terno-preto-para-bebe-8351.jpg",
        "nombre":"Terno moderno", 
        "descripcion":"Manga larga",
        "talla": "S - M - L",
        "precio":85, 
        "stock":15,
        "catId":1
    },
    {

        "imag": "https://th.bing.com/th/id/OIP.2EHhV7COFyQASpA14E002QHaHa?pid=ImgDet&rs=1",
        "nombre":"Mochila Pañalera", 
        "descripcion":"Gran capacidad y varios compartimientos independientes ",
        "talla": "S - M - L",
        "precio":60, 
        "stock":15,
        "catId":3
    },
    {

        "imag": "https://sc04.alicdn.com/kf/H8df4c90de94644ef82c711d91ed6205c9.jpg_Q55.jpg",
        "nombre":"Polo de Lactancia", 
        "descripcion":"Lindo y moderno polo de lactacia, con abertura discreta ",
        "talla": "S - M - L",
        "precio":55, 
        "stock":15,
        "catId":4
    },
    {

        "imag": "http://s3.amazonaws.com/storage.wobiz.com/130/130010/images/Large/1609383006_30d2a056de0031ff5f51fc88ff2a1f6d.130010.jpeg",
        "nombre":"pantalon de maternidad", 
        "descripcion":"Comodo pantalon jean corte clasico, con la comodidad para la barriguita de mamá ",
        "talla": "S - M - L",
        "precio":85, 
        "stock":15,
        "catId":4
    },
    {

        "imag": "https://i.pinimg.com/originals/b9/2e/4c/b92e4cf18b22ebf55a51c5998990c66d.jpg",
        "nombre":"Vestido maternidad", 
        "descripcion":"Hermoso vestido ideal para celebrar el BabyShower ",
        "talla": "S - M - L",
        "precio":100, 
        "stock":15,
        "catId":4
    },
    {

        "imag": "https://scontent.flim2-1.fna.fbcdn.net/v/t45.5328-4/p960x960/158978632_3952185038134987_6009689208401861958_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeF38WpBLxpeGI-4j4llRUWL2vhFOGsvr2za-EU4ay-vbAh8JYO2cYQt0NvAB2Z1RQ0&_nc_ohc=TPmFlcHDheYAX_ZwlQ1&tn=B1JGO8SWu3PvrHvG&_nc_ht=scontent.flim2-1.fna&oh=00_AT9apAfSXaL0N0yMi9_JQJ5zwuOhl2KsVP2levaRAvwk0A&oe=6207D1F9",
        "nombre":"Retenedor de Puerta", 
        "descripcion":"Protegue los dedos de tu bebe, con estos divertidos retendedores de puerta ",
        "talla": "diseños variados",
        "precio":9, 
        "stock":15,
        "catId":3
    }
];

const AddProductPage=()=>{
    const db = getFirestore();
    const collection= db.collection('PRODUCTOS')

    const createProductFirestore=()=>{
        PRODUCTS.forEach((product)=>{
            collection
            .add(product)
            .then((res)=> console.log('Producto Agregado', res.id))
            .catch((err)=>console.log("Se rompio tod:", err));
        })
        
    }


    return(
        <div>
            <h1>Add Product Page</h1>
            <Outlet/>
            <button onClick={createProductFirestore}>Agregar Producto a Firestore</button>
        </div>
    );
}

export default AddProductPage;