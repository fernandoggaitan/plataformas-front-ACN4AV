import { useState, useEffect } from "react"

import CandidatoItem from "./CandidatoItem"

const lista = [
    {ID: 1, imagen: "/img/personas/1.jpg", nombre: "Sofía", votos: 5},
    {ID: 2, imagen: "/img/personas/2.jpg", nombre: "Ricardo", votos: 2},
    {ID: 3, imagen: "/img/personas/3.jpg", nombre: "Carolina", votos: 3}
]

export default function CandidatosLista() {

    const [candidatos, setCandidatos] = useState(lista);
    const [cantidad_votos, setCantidadVotos] = useState(0);

    useEffect(() => {
        calcularCantidadVotos()
    }, [candidatos])

    const calcularCantidadVotos = () => {
        const cantidad_votos_temp = candidatos.reduce( (cantidad, item) => cantidad += item.votos, 0 );
        setCantidadVotos(cantidad_votos_temp);
    }

    const handlerCandidato = (ID, votos) => {
        const candidatos_temp = candidatos.map( (item) =>  {
            if(ID == item.ID){
                item.votos = votos;
            }
            return item;
        });
        setCandidatos(candidatos_temp);
    }

    return (
        <>
            <h1> Lista de candidatos </h1>
            <div> Cantidad de votos: {cantidad_votos} </div>
            <div className="row">
                {
                    candidatos.map( (item) => (
                        <div key={item.ID} className="col-lg-3">
                            <CandidatoItem 
                                ID={item.ID}
                                imagen={item.imagen}
                                nombre={item.nombre}
                                initialVotos={item.votos}
                                changeVotos={handlerCandidato}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )

}