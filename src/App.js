import React, { Component } from 'react';
import './App.css';
import Boutton from './Boutton';
import Phrases from './Masque';
import GuessCount from './essaie';

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let phrase = 'prince Charment,Blanche Neige,wilfried le mignon,Mambingo le fou,le lion manges les herbes,le loup vit en amerique,la reine des dragons est danearys'.split(
  ','
);
class App extends Component {
  state = {
    phrase: phrase,
    feedback: 'hidden',
    lettres: alphabet,
    touteLettres: alphabet.split(''),
    randomPhrase: phrase[this.getRandomInt(phrase.length)],
    matchedLetterLetter: [],
    essaie: [],
    unmatchedLetterLetter: []
  };
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleBouttonClick = lettre => {
    const {
      randomPhrase,
      matchedLetterLetter,
      unmatchedLetterLetter
    } = this.state;
    const matched =
      randomPhrase.toUpperCase().includes(lettre.toUpperCase()) === true;
    const unmatched =
      randomPhrase.toUpperCase().includes(lettre.toUpperCase()) === false;

    this.setState({
      essaie:
        this.state.matchedLetterLetter.length +
        this.state.unmatchedLetterLetter.length +
        1
    });
    if (unmatched) {
      this.setState({
        unmatchedLetterLetter: [...unmatchedLetterLetter, ...lettre]
      });
    }
    if (matched) {
      this.setState({
        matchedLetterLetter: [...matchedLetterLetter, ...lettre]
      });
    }
    return;
  };
  getFeetbackForLetter(lettre) {
    const { matchedLetterLetter} = this.state;
    return matchedLetterLetter.indexOf(lettre.toLocaleUpperCase()) >= 0
      ? 'visible'
      : 'hidden';
  }
  render() {
    const {essaie,touteLettres, randomPhrase } = this.state;
    return (
      <div className="container">
       <GuessCount essaies={`nombre d'essaies:${essaie}`}/>
        <div className="top">
          {randomPhrase.split('').map((lettre, index) => (
            <Phrases
              feedback={this.getFeetbackForLetter(lettre)}
              phrase={lettre.toLocaleUpperCase()}
              key={index}
            />
          ))}
        </div>
        <div className="topbon">
        
          {touteLettres.map((toutelettre, index) => (
            <Boutton
              key={index}
              onClick={this.handleBouttonClick}
              index={index}
              lettre={toutelettre.toUpperCase()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
