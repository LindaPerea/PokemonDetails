import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/pokedetail.css'

const PoKeDetail = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data));
    }, []);

    // console.log(pokemon);
    return (
        <div className='container-detail'>

            <h1>{pokemon.name}</h1>
            <div className='aling-li'>
                <li>Type: {pokemon.types?.[0].type.name}</li>
                <li>Weight: {pokemon.weight}</li>
            </div>
            <div className='box' >
                <div className='card transform-3d'>
                    <img src={pokemon.sprites?.other.home.front_default} alt="" />
                </div>

            </div>

        </div>
    );
};

export default PoKeDetail;