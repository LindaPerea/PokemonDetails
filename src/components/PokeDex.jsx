import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import PokeCard from './PokeCard';
import '../assets/css/pokedex.css'

const PokeDex = () => {

    const name = useSelector(state => state.pokeName)

    const [pokeList, setPokeList] = useState([]);

    const [pokeNameInput, setPokeNameInput] = useState("");

    const [pokeType, setPokeType] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => setPokeList(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setPokeType(res.data.results));


    }, []);
    console.log(pokeType);
    console.log(pokeList);


    const searchName = () => {
        navigate(`/pokedex/${pokeNameInput.toLowerCase()}`)
    }

    const filterType = (e) => {
        const url = e.target.value;
        axios.get(url).then((res) => setPokeList(res.data.pokemon));
    };

    return (
        <div className='container-pokedex'>
            <h1>Pokemones Here!</h1>
            <p className='paragraph'>Bienvenido {name}</p>
            <div>
                <input type="text"
                    placeholder='buscar por nombre'
                    value={pokeNameInput}
                    onChange={e => setPokeNameInput(e.target.value)}
                />
                <button onClick={searchName}>Search</button>

                <div className=''>
                    <select onChange={filterType} name="" id="">
                        {pokeType.map((type) => (
                            <option value={type.url} key={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </select>

                </div>
            </div>
            <ul className='align-pokemons'>
            {

                pokeList.map(poke => (
                    <li>
                        <PokeCard
                            url={poke.url ? poke.url : poke.pokemon.url}
                            key={poke.url ? poke.url : poke.pokemon.url}
                        />
                    </li>

                ))
            }
            </ul>

        </div>
    );
};

export default PokeDex;