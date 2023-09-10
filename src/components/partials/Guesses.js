import React from 'react'

function Guesses(props) {
  // console.log(props.dogGuessData.DogGuesses)
  return (
    <div className="d-flex m-3">
      {props.dogGuessData.DogGuesses.map((dg, i) => {
        return (
          <div className="p-2">
            <h4>Guesser: {dg.User.name}</h4>
            <h4>Breed: {dg.breed}</h4>
            <h4>Percentage: {dg.percentage}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Guesses