





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

            <form onSubmit={handLeSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre"/> <br />
                <label htmlFor="age">Edad</label>
                <input type="number" name="age" id="age"/> <br />
                <input type="submit" value="Enviar" />


                <input type="text" placeholder="Escribir aqui" onKeyDown={handLeKeyDown} />
            </form>
            </div>
    );
};

export default LoginPage