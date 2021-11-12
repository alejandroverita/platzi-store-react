import React from 'react';

import '../styles/NotFound.scss'

const NotFound = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <h1>404</h1>
                    <h2>Opps! Estás perdido.</h2>
                    <p> La página que estás buscando no existe.
                        Como llegaste aqui es todo un misterio. Pero puedes regresar a la página principal dando click al boton debajo.
                    </p>
                    <button className="btn green">HOME</button>
                </div>
            </div>
        </main>
    );
}

export default NotFound;