
const productos = [{"id":"CO01", "producto":"vestido-peppa","descripcion": "vestido","stock":"8"}]

const getProductos = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos);
            //reject(new Error("Se cayo el sistema."));
        },2000);
    })

}



const getDataAsyncAwait= async()=>{
    try{
        const result = await getProductos();
        console.log (result)
    }catch(error){
        console.error("todo mal", error)
    }

};

getDataAsyncAwait();




// THEN / CATCH
//getProductos()
//    .then((result)=> console.log(result))
//    .catch((error)=> console.error("Ha habido un error:", error))
//    .finally(()=> console.log("Terminamos con el manejo de nuestra promesa"))



//LOGIN


import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const login=()=>{
    const {name, email,img}=useContext(UserContext);
    return
    <div>
        <h1>Home</h1>
        {/*HOOK*/}
        <p>Nombre: {name}</p>
        <p>Email: {email}</p>
        <img src={img} alt={name} />
        {/*CONSUMER*/}
        <UserContext.Consumer>
            {(value)=>(
                <div>
                        <p>Nombre: {value.name}</p>
                        <p>Email: {value.email}</p>
                        <img src={value.img} alt={name} />
                </div>
            )}
        </UserContext.Consumer>
    </div>
    
}


const USER_DATA={
    name:"Laura",
    email:"laura@email.com",
    img:"https:/picsum.photos/200",
  
  };


  

const LoginPage=()=>{
    //no permite escribir vocales
    const handLeKeyDown=(event)=>{
        if(
            event.key ==="a" ||
            event.key ==="e" ||
            event.key ==="i" ||
            event.key ==="o" ||
            event.key ==="u" 
    
        ){
            event.preventDefault();
        }
    };
    
///------

    const handLeSubmit =(evt)=>{
        evt.preventDefault();
                console.log({
                    [evt.target[0].name]: evt.target[0].value,
                    [evt.target[1].name]: evt.target[1].value,
    });
}
    
    return(
        <div>
            <h1>Login Page</h1>
            <UserContext.Consumer>

            <form onSubmit={handLeSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre"/> <br />
                <label htmlFor="age">Edad</label>
                <input type="number" name="age" id="age"/> <br />
                <input type="submit" value="Enviar" />


                <input type="text" placeholder="Escribir aqui" onKeyDown={handLeKeyDown} />
            </form>
            </UserContext.Consumer>
            </div>
    );
};

export default LoginPage




