import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import circle from '../assets/img/circle.png'
import '../assets/css/pokecard.css'


const PokeCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

        axios.get(url)
            .then(res => setPokemon(res.data));

    }, []);

    // console.log(pokemon);
    // onClick={()=> navigate(`/PokeDex/${pokemon.id}`)}
    return (
        <div className='pokecard'>
            
            <Link className='' to={`/PokeDex/${pokemon.id}`}>
                <h3>{pokemon.name} </h3>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                
            </Link>
        </div>
    );
};

export default PokeCard;