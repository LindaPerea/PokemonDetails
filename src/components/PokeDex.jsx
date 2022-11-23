import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import circle from '../assets/img/circle.png'
import PokeCard from './PokeCard';

import '../assets/css/pokedex.css'

const PokeDex = () => {

    const name = useSelector(state => state.pokeName)

    const [pokeList, setPokeList] = useState([]);

    const [pokeNameInput, setPokeNameInput] = useState("");

    const [pokeType, setPokeType] = useState([]);

    const navigate = useNavigate();

    const [suggestions, setSuggestions] = useState([]);

    

    useEffect(() => {
        

        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => setPokeList(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setPokeType(res.data.results));

    }, [pokeNameInput]);
    console.log(suggestions);
    // console.log(pokeList);

    const searchName = () => {
        navigate(`/pokedex/${pokeNameInput.toLowerCase()}`)
    }

    const filterType = (e) => {
        const url = e.target.value;
        axios.get(url).then((res) => setPokeList(res.data.pokemon));
    };

    const [page, setPage] = useState(1);
    const pokemonsPerPage = 8
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const pokemonPaginated = pokeList.slice(firstIndex, lastIndex);
    const totalpages = Math.ceil(pokeList.length / pokemonsPerPage);

    const numbers = [];
    for (let i = 1; i <= totalpages; i++) {
        numbers.push(i);
    }

    // console.log(numbers);

    return (
        <div className='container-pokedex'>

            <h1>Pokemones Here!</h1>
            <p className='paragraph'>Bienvenido {name}</p>
            <div className='buttons'>
                <div className='align-input-search'>
                    <input className='type' type="text"
                        placeholder='Seacrh for Name'
                        value={pokeNameInput}
                        onChange={e => setPokeNameInput(e.target.value)}
                    />
                    <button className='type' onClick={searchName}>Search</button>
                </div>

                <div className='align-prev-next'>
                    {
                        suggestions.map(suggestion => (
                            <li>
                                {suggestion.name}
                            </li>
                        ))
                    }
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >Prev Page
                    </button>
                    {numbers.map(number => (
                        <button onClick={() => setPage(number)}>{number}</button>
                    ))}
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalpages}
                    >Next Page
                    </button>
                </div>

                <div className='align-select'>
                    <div className='select-type-text'> <p>Select Pokemon Type</p> </div>                    
                    <select className='type' onChange={filterType} name="" id="">
                        {pokeType.map((type) => (
                            <option value={type.url} key={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </select>

                </div>

            </div>
            <div className=''>

                <ul className='cards'>
                    {

                        pokemonPaginated.map(poke => (

                            <div className='cartas'>

                                <PokeCard
                                    url={poke.url ? poke.url : poke.pokemon.url}
                                    key={poke.url ? poke.url : poke.pokemon.url}
                                />
                            </div>




                        ))

                    }
                </ul>
            </div>



        </div>
    );
};

export default PokeDex;