import React, { useState } from 'react'
import styles from './Game.module.css'

function Game() {

    const [inputValue, setInputValue] = useState("");
    const [words, setWords] = useState([
        'taco',
        'anti-disestablishment',
        'wisdom',
        'tooth',
        'fortitude',
        'hunger',
        'forty',
        'axolotl',
        'heist'
    ])

    function handleChange(event) {
        // destructuring!
        // creating a variable called value
        // same as: const value = event.target.value
        const { value } = event.target;
        setInputValue(value);

        if(value === words[0]) {
            // we have a match
            // dont do it this way
            // words.shift();

            // triggers React to rerender the component
            setWords(words.slice(1));
            console.log('words look like this now: ', words);

            // reset input for next word
            setInputValue('');
        }
    }

    return(
        <div>
            <h3>{inputValue}</h3>
            <input 
                type="text" 
                onChange={handleChange}
                value={inputValue}    
            />
            <ul className={styles.list}>
                {words.map((word, idx) =>
                    <li key={idx} className={ styles.listItem }>{word}</li>
                )}
            </ul>
        </div>
    )
}



// const Game = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

export default Game
