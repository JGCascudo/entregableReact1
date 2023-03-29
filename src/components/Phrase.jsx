import React from 'react'

const Phrase = ({PhraseRandom}) => {

  return (
    <p className='App_phrase'>{PhraseRandom.phrase} <hr /> {PhraseRandom.author}</p>
  )
}

export default Phrase