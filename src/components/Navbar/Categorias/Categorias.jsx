import React from 'react';
import { Link } from 'react-router-dom';
export const Categorias = React.memo(() => {
    return (
        
           <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button className="btn btn-dark">Articulos de Pesca</button> 
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={'/category/cañas'}>Cañas</Link> </li>
              <li><Link className="dropdown-item" to={'/category/reeles'}>Reeles</Link></li>
              <li><Link className="dropdown-item" to={'/category/aparejos'}>Aparejos</Link></li>
              <li><Link className="dropdown-item" to={'/category/carnadas'}>Carnadas</Link></li>
              
              
            </ul>
          </li>
          
        
    );
})

