import { useRef } from "react";

export const useLs = () => {

    const isMounted = useRef(false);
        const saveData = (data,name) => {
            if(isMounted.current){
                const json = JSON.stringify(data);
                localStorage.setItem(name, json)
             }
          
        }
     return {saveData,isMounted}
}