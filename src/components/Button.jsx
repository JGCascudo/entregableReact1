import React from 'react'
import getRandomArray from '../utils/getRandomArray'
import Phrase from '../utils/phrases.json'

const Button = ({setPhraseRandom, setNumberImg}) => {

    const handleChangePhrase = () =>{
      setPhraseRandom(getRandomArray(Phrase))
      setNumberImg(getRandomArray([1, 2, 3, 4]))
    }

  return (
    <button className='App_btn' onClick={handleChangePhrase}>Random Phrases</button>
  )
}

export default Button