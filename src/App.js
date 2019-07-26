import React, { Component } from 'react';
import './App.css';
import { Boutton } from './Boutton';
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
    essaie: 0,
    unmatchedLetterLetter: [],
    couleur: [],
    victoire: false
  };
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  handleBouttonClick = lettre => {
    const {
      randomPhrase,
      matchedLetterLetter,
      unmatchedLetterLetter,
      victoire,
      essaie
    } = this.state;
    const matched =
      randomPhrase.toUpperCase().includes(lettre.toUpperCase()) === true;
    const unmatched =
      randomPhrase.toUpperCase().includes(lettre.toUpperCase()) === false;
    const phraseColeTail = randomPhrase.toUpperCase().split('');
    console.log(phraseColeTail);
    // ici on fais une boucle pour obtnenir un tableau de lettre unique sans doublon afin de determiner le gagnant
    let tableauLettreUnique = [];

    for (let i = 0; i < phraseColeTail.length; i++) {
      if (tableauLettreUnique.indexOf(phraseColeTail[i]) === -1) {
        tableauLettreUnique = [...tableauLettreUnique, ...phraseColeTail[i]];
      }
    }
    console.log(matchedLetterLetter.length);

    let tab2 = [...tableauLettreUnique];
    // console.log(tab2.join('').replace(/\s/g, '')) ici on enleve les espaces dans la phrase

    if (
      tab2.join('').replace(/\s/g, '').length ===
      matchedLetterLetter.length + 1
    ) {
      this.setState(state => {
        return {
          victoire: true
        };
      });

      if (essaie === matchedLetterLetter.length) {
        alert(
          'Victoire Felicitations 😻 ㊗🌻 ⚡' +
            'votre score est parfais' +
            'nombre dessaies :' +
            ` ${essaie}`
        );
      } else if (3 >= matchedLetterLetter.length - essaie) {
        alert('bon score 😍 ' + 'nombre dessaies :' + `${essaie}`);
      } else if (3 < matchedLetterLetter.length - essaie) {
        alert('score Moyen 🤐' + 'nombre dessaies :' + ` ${essaie}`);
      }
      return;
    }

    this.setState(state => {
      return {
        essaie: state.essaie + 1
      };
    });
    this.setState(state => {
      return {
        victoire: [...state.matchedLetterLetter]
      };
    });
    if (unmatched) {
      this.setState(state => {
        return {
          unmatchedLetterLetter: [...state.unmatchedLetterLetter, ...lettre]
        };
      });
    }
    if (matched) {
      if (matchedLetterLetter.includes(lettre.toUpperCase()) === false) {
        this.setState(state => {
          return {
            matchedLetterLetter: [...state.matchedLetterLetter, ...lettre]
          };
        });
      }
    }
    return;
  };
  getFeetbackForLetter(lettre) {
    const { matchedLetterLetter, couleur } = this.state;

    return matchedLetterLetter.indexOf(lettre.toLocaleUpperCase()) >= 0
      ? 'visible'
      : 'hidden';
  }
  render() {
    const {
      essaie,
      touteLettres,
      randomPhrase,
      matchedLetterLetter,
      unmatchedLetterLetter,
      victoire
    } = this.state;
    return (
      <div className="container">
        <GuessCount essaies={`nombre d'essaies:${essaie}`} />
        <div className="top">
          {randomPhrase.split('').map((lettre, index) => (
            <Phrases
              feedback={this.getFeetbackForLetter(lettre)}
              phrase={lettre.toLocaleUpperCase()}
              key={index}
            />
          ))}
        </div>
        {victoire === true ? (
          <div className={`b1`} onClick={() => document.location.reload(false)}>
            {<p>{`nouvelle partie`}</p>}
          </div>
        ) : (
          <div className="topbon">
            {touteLettres.map((toutelettre, index) => (
              <Boutton
                key={index}
                onClick={this.handleBouttonClick}
                index={index}
                lettre={toutelettre.toUpperCase()}
                feedbackMatch={matchedLetterLetter}
                feedbackUnMatch={unmatchedLetterLetter}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
