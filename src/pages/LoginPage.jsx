import {  useUsuario } from "../context/UserContext";

const LoginPage=()=>{
    const {data,isLoading, error, cambiarNombre}= useUsuario();
    if(isLoading){
        return <p>Cargando......</p>
    }else if(error){
        return <p>Ha habido un error</p>
    }else

    return(
        <div>
            <h1>Login Page</h1>

            <p>Nombre: {data.name}</p>
            <p>Email: {data.email}</p>
            <img scr={data.foto} alt={data.name}/>   <br /><br />   
            <button onClick={cambiarNombre}> Cambiar Nombre</button>           
        </div>
    );
}
    export default LoginPage


  //<img scr={require('../../public/imagenes/usuarios/'+ data.foto)} alt={data.name}/>   