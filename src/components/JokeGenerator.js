import React, { useState, useEffect } from 'react';
import Chuck from '../assets/Chuck-Norris-Guns.png';
import Trump from '../assets/trump.png';
import Header from '../components/Header';


//const API_CHUCK = `http://api.icndb.com/jokes/random`;
//const API_TRUMP = `https://api.whatdoestrumpthink.com/api/`;

const JokeGenerator = () => {

    const [chuckJoke, setChuckJoke] = useState('');
    const [trumpJoke, setTrumpJoke] = useState('');

    //Call the Api 

    const generateChuckJoke = () => {
        fetch("http://api.icndb.com/jokes/random")
            .then(res => res.json())
            .then(data => setChuckJoke(data.value.joke));
    }
    useEffect(() => {

        generateChuckJoke()

    }, [])

    const generateTrumpJoke = () => {
        fetch("https://api.tronalddump.io/random/quote")
            .then(res => res.json())
            .then(data => setTrumpJoke(data.value));
    }

    useEffect(() => {

        generateTrumpJoke()
    }, [])
    //Sound



    return (

        <div className="Container">
            <Header />

            <div className="chat-group">
                <div className="Glass Chuck-Glass">
                    <button onClick={generateChuckJoke} className="ChuckBtn">KILL</button>
                    <p className="Chuck-Quote">{chuckJoke}</p>
                </div>

                <div className="Glass Trump-Glass">
                    <p className="Trump-Quote">{trumpJoke} </p>
                    <button onClick={generateTrumpJoke} className="trumpBtn">KILL</button>
                </div>
            </div>
            <div className="Block"></div>

            <div className="Images">
                <img className="Chuck" src={Chuck} alt="Chuck Norris holding Two guns">
                </img>
                <img className="Trump" src={Trump} alt="Trump Screaming"></img>
            </div>
        </div>

    )
}

export default JokeGenerator;