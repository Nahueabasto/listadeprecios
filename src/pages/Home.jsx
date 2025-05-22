import React, { useEffect } from 'react';
import NavBar from '../componet/Navbar';
import CardProduct from '../componet/CardProduct';
import CardProductGringa from '../componet/CardProductGringa';
import Fecha from '../componet/Fecha';


export default function Home(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []); // El segundo argumento asegura que esta función se ejecute solo una vez, después de que el componente se monte

    return(
        <div>
            <NavBar/>
            <Fecha/>
          <CardProduct/>
         <CardProductGringa/>
        </div>
    )
}