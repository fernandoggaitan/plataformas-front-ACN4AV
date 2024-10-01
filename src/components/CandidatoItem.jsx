import { useState } from "react";

export default function CandidatoItem( {imagen, nombre, initialVotos} ){

    const [votos, setVotos] = useState(initialVotos);

    const incrementar = (e) => {
        e.preventDefault();
        const votos_temp = votos + 1;
        setVotos(votos_temp);
    }

    const handlerVotos = (e) => {
        const votos_temp = parseInt(e.target.value, 10);
        if( isNaN(votos_temp) ) return;
        setVotos(votos_temp);
    }

    return (
        <div className="card">
            <div className="card-body">
                <img src={imagen} alt="..." />
                <h2 className="card-title"> {nombre} </h2>
                <a href="" className="btn btn-primary mb-1" onClick={incrementar}> Votar (Cantidad de votos: {votos}) </a>
                <input type="text" value={votos} onChange={handlerVotos} />
            </div>
        </div>
    )

}