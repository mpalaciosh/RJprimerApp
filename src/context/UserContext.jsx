import { createContext, useContext, useEffect, useState} from "react";
export const UserContext = createContext({});
UserContext.displayName = "UserContext";


export const UserProvider =({children})=>{
    const [data, setData]= useState({});
    const [error, setError]= useState(null);
    const [isLoading, setIsLoading]=useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch("http://localhost:3001/USER")
        .then((response)=> response.json())
        .then((json)=>setData(json))
        .catch((err)=> setError(err))
        .finally(()=>setIsLoading(false));
},[]);

    const cambiarNombre =()=>{
        setData({
            "name":"Sonia",
            "email":"sonia.palaciosh@gmail.com",
            "foto":"https:/picsum.photos/201"
        });
    };
    return(
        <UserContext.Provider value={{data, error, isLoading, cambiarNombre}}>
        {children}
        </UserContext.Provider>

    );
};

export const useUsuario=()=> useContext(UserContext);


//import {UserProvider } from './context/UserContext';
//  </UserProvider>

 //<UserProvider>