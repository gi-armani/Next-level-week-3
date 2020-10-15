import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import mapMarkerImg from '../Images/Map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return(
        <div className="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;