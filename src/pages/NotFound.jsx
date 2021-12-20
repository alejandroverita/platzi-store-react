import React from 'react';

import '../styles/NotFound.scss'

const NotFound = () => {
    return (
        <main className="NotFound">
            <div className="NotFound-rows">
                <h1 className='NotFound-title'>404</h1>
                <h2 className = 'NotFound-subtitle'>Opps! Estás perdido.</h2>
                <p> La página que estás buscando no existe.
                    Como llegaste aqui es todo un misterio. Pero puedes regresar a la página principal dando click al boton debajo.
                </p>
                <button className="btn green">HOME</button>
            </div>
        </main>
    );
}

export default NotFound;