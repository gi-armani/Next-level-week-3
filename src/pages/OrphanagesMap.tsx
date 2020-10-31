import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../Images/Map-marker.svg';

import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

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

            <Map 
                center = {[-23.6126208,-46.6485248]}
                zoom = {15}
                style = {{ width: '100%', height: '100%'}}
            >
                <TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker
                    icon = {mapIcon}
                    position = {[-23.6126208,-46.6485248]}
                >
                    <Popup 
                        closeButton={false} 
                        minWidth={240} maxWidth={240}
                        className = "map-popup">
                        Lar das meninas
                        <Link to="">
                            <FiArrowRight size = {20} color = "FFF"/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;