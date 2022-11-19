import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PoKeDetail = () => {

    const { id } = useParams();

    const [ pokemon, setPokemon ] = useState({});

    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data));
    }, [] );

    console.log(pokemon);
    return (
        <div>
            <h1>{pokemon.name}</h1>
            
            <img src={pokemon.sprites?.front_default} alt="" />
        </div>
    );
};

export default PoKeDetail;