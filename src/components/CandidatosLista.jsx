import CandidatoItem from "./CandidatoItem"

const lista = [
    {ID: 1, imagen: "/img/personas/1.jpg", nombre: "Sofía", votos: 5},
    {ID: 2, imagen: "/img/personas/2.jpg", nombre: "Ricardo", votos: 2},
    {ID: 3, imagen: "/img/personas/3.jpg", nombre: "Carolina", votos: 3}
]

export default function CandidatosLista() {

    return (
        <>
            <h1> Lista de candidatos </h1>
            <div className="row">
                {
                    lista.map( (item) => (
                        <div key={item.ID} className="col-lg-3">
                            <CandidatoItem 
                                imagen={item.imagen}
                                nombre={item.nombre}
                                initialVotos={item.votos}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )

}