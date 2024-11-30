import React, {useState} from 'react'

const wordChoices = ['apple', 'banana', 'cherry', 'dog', 'elephant', 'forest', 'grape', 'house', 'island', 'jungle', 'kite', 'lemon', 'mountain', 'notebook', 'ocean']

const Paragen = () => {
    const[wordsArr, setWordsArr] = useState([""]);
    const[inputVal, setInputVal] = useState('');

   function handleWords(e){
        e.preventDefault();
        console.log("HELLO")
        if(isNaN(Number(e.target.value))) return;
        console.log("HELLO")
        const len = Number(inputVal);
        console.log(len);
        const tempWords = [];
        for(let i = 0; i < len; i++){
            console.log("FFF");
           const rndInx = Math.floor(Math.random() * 15);
           console.log(wordChoices[rndInx]);
            tempWords.push(wordChoices[rndInx]);
        }
        console.log(tempWords);
        setWordsArr(tempWords);
        
    }

  return (
    <div className='container'>
        <h1>Para Generator</h1>
        <div className='user-input'>
            <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text" placeholder='Enter number of words' />
            <button onClick={handleWords}>Generate</button>
        </div>
        <div className='word-container'>{wordsArr.map(word => (
            `${word} ` 
        ))}</div>
    </div>
  )
}

export default Paragen