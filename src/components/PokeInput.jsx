import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/pokeName.slice';
import imagen1 from '../assets/img/imagen1.png';
import circle from '../assets/img/circle.png'
import pokeyoung from '../assets/img/pokeyoung.png'
import pokedex from '../assets/img/pokedex.svg'
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
        <div className='animate-bg'>
            <div className='container  '>
                <div className='pokeyoung-imagen'>
                        <img src={pokeyoung} alt="" width={300} />
                </div>
                <div className='h1'>
                        <img src={pokedex} alt=""  />                        
                </div>
            
                
                <div className='container-hello hello-responsive 1'>
                    
                    <h1 className=''>Hello Trainer!</h1>
                    
                    <input className='box-input'
                        type="text"
                        placeholder='Type Your Name'
                        value={pokeName}
                        onChange={e => setPokeName(e.target.value)}
                    />
                    <div className='align-btn1-input'>
                        <button className='btn1' onClick={dispatchPokeName}>Send</button>
                        <div className='button-input '>

                        </div>

                    </div>

                </div>
                {/* <div className='circle 3'>
                    <img className='circle' src={circle} alt="" />
                </div> */}
            </div>

        </div>
    );
};

export default PokeInput; 