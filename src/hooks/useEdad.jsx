import { useState } from "react"

export const useEdad = () => {

    const [edad, setEdad] = useState(1);

    const handlerEdad = (e) => {
        const edad_temp = parseInt(e.target.value, 10);
        if( isNaN(edad_temp) || edad_temp < 1 || edad_temp > 120 ) return;
        setEdad(edad_temp);
    }

    return [edad, setEdad, handlerEdad];

}