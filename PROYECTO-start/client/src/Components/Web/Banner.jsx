import React, { useEffect, useState } from "react";
import axios from 'axios';

const Banner = () => {
    //const [banner, setBanner] = useState([])
    const [fondo, setFondo] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/banner/ultimoBanner')
            .then(res => {
                //console.log(res.data.results[0]);
                setFondo(res.data.results[0].imagen);
            })
            .catch(err => console.log(err))
    }, [fondo])

    return (
        <header className="masthead bg-primary text-white text-center fondo" style={{backgroundImage:`url(../assets/banner/${fondo})`,}}>
            <div className="container d-flex align-items-center flex-column">
            </div>
        </header>
    
    )
}

export default Banner