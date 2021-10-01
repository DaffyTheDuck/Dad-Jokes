import React, {useState} from 'react'
import './DadJoke.scss';
import axios from 'axios';

export default function DadJoke(props) {

    const [jokes, setJokes] = useState({
        id: '',
        joke: 'Spawn A New Joke!'
    });


    const fetchJoke = async() => {
        const response = axios.get("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        }).then((response) => {
            setJokes({
                id: response.data.id,
                joke: response.data.joke
            });
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="inner-div">
            <div className="joke-div">
                    {jokes.joke}
            </div>
            <button onClick={fetchJoke}>Get New Joke</button>
        </div>
    )
}
