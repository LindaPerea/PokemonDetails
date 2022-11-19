import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const PokeCard = ( {url} ) => {

    const [pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(()=> {

        axios.get(url)
            .then( res=> setPokemon(res.data));

    },[]);

    console.log(pokemon);
// onClick={()=> navigate(`/PokeDex/${pokemon.id}`)}
    return (
        <Link to={ `/PokeDex/${pokemon.id}`}>
            <h3>{pokemon.name} </h3>            
            <img src={pokemon.sprites?.front_default} alt="" />
            
        </Link>
    );
};

export default PokeCard;