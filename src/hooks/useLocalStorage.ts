import { useEffect, useState } from "react";

const useLocalStorage=(key:string , value:string)=>{
    const [localStorageData,setLocalStorageData]=useState(value)

    localStorage.setItem(key, value)

    useEffect(()=>{
    
    },[])

}

export default useLocalStorage;