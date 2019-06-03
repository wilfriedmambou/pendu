import React from 'react'
import PropTypes from 'prop-types'

// import './GuessCount.css'

const GuessCount = ({essaies}) => <div className="guesses" >{essaies}</div>

GuessCount.propTypes={
    guesses:PropTypes.number.isRequired,
}

export default GuessCount