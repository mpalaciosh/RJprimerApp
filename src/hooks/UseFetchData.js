import * as React from "react";
import react from "react";

const useFetchData =()=>{

    const [data, setData]= React.useState([]);
    const [isloading, setIsloading]= React.useState(false);
    const [error, setError]= React.useState(null);

    React.useEffect(()=>{
        const URL="";
        setIsloading(true);
        fetch(URL)
        .then((res)=> res.json())
        .then((json)=> setData(json))
        .catch((err)=> setError(err))
        .finally(()=> setIsloading(false));

    },[]);

    return {data, isloading,error};
};

export default useFetchData;