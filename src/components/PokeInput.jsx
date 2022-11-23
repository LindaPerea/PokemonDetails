import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/pokeName.slice';
import imagen1 from '../assets/img/imagen1.png';
import circle from '../assets/img/circle.png'
import '../assets/css/input.css';

const PokeInput = () => {

    const [pokeName, setPokeName] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const dispatchPokeName = () => {

        dispatch(changeName(pokeName));
        navigate("/pokedex")
    }

    return (
        <div className='container animate-bg '>
            <img className='imagen1' src={imagen1} alt="" />
            
            
            <div className='h1'>
                <h1 className=''>Hello Trainer!</h1>
            </div>            
                <input className='box-input '
                    type="text"
                    placeholder='Type Your Name'
                    value={pokeName}
                    onChange={e => setPokeName(e.target.value)}
                />            
            <div className='button-input'>
                <button className='btn1' onClick={dispatchPokeName}>Send</button>
            </div>
            <img className='circle' src={circle} alt="" />

        </div>
    );
};

export default PokeInput; <h1>pokeInput</h1>