
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



