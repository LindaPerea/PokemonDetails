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
        <div className='container '>
            <div className='' >
                <div className='input'>
                    <h1 className=''>Hello Trainer!</h1>
                    <img src={circle} alt="" />
                </div>

                <div className='input'>


                    <div className=' myDiv animate-bg'>
                        <input className='box-input'
                            type="text"
                            placeholder='Type Your Name'
                            value={pokeName}
                            onChange={e => setPokeName(e.target.value)}
                        />
                    </div>

                    <div className='button-input'>
                        <button className='btn1' onClick={dispatchPokeName}>Send</button>
                    </div>

                </div>
                <img  className='backgroundImage' src={imagen1} alt="" />
            </div>
        </div>
    );
};

export default PokeInput; <h1>pokeInput</h1>