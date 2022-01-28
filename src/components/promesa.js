const URL = "http://localhost:3001/PRODUCTOS";
export function getItem (){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(URL);
            //reject(new Error("Se cayo el sistema."));
        },2000);
    })

}
