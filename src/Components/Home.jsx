import React, { useState, useRef } from "react";
import "./home.css";
import { MdRestartAlt } from "react-icons/md";
import { GiPerspectiveDiceSixFacesSix } from "react-icons/gi";
import { TbHandStop } from "react-icons/tb";
import Dice1 from "../assets/dice-1.png";
import Dice2 from "../assets/dice-2.png";
import Dice3 from "../assets/dice-3.png";
import Dice4 from "../assets/dice-4.png";
import Dice5 from "../assets/dice-5.png";
import Dice6 from "../assets/dice-6.png";

const Home = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [currentScore1, setCurrentScore1] = useState(0);
  const [currentScore2, setCurrentScore2] = useState(0);
  const [rolledDice, setRolledDice] = useState("");
  const [clicked, setClicked] = useState(false);
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);
  const [one, setOne] = useState(false);
  const player1Ref = useRef(null);
  const player2Ref = useRef(null);
  console.log(player1Ref, player2Ref);

  const dice = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const handleDiceRoll = () => {
    setClicked(true);
    const numb = Math.trunc(Math.random() * 6 + 1);
    console.log(numb);
    setRolledDice(dice.filter((die, ind) => ind + 1 === numb));
    if (numb !== 1 && player1) {
      setCurrentScore1((prev) => prev + numb);
      player1Ref.current.classList.add("active");
    }
    if (numb === 1 && player1) {
      setOne(true);
      setTimeout(() => {
        setOne(false);
      }, 1500);
      setPlayer1(!player1);
      //   setClicked(!clicked);
      setCurrentScore1(0);
      setPlayer2(!player2);
      player1Ref.current.classList.remove("active");
      player1Ref.current.classList.add("notActive");
      player2Ref.current.classList.add("active");
    }
    if (numb !== 1 && player2) {
      player2Ref.current.classList.add("active");
      setCurrentScore2((prev) => prev + numb);
    }
    if (numb === 1 && player2) {
      setOne(true);
      setTimeout(() => {
        setOne(false);
      }, 1500);
      //   setOne(!one);
      setPlayer2(!player2);
      setCurrentScore2(0);
      //   setClicked(!clicked);
      setPlayer1(!player1);
      player2Ref.current.classList.remove("active");
      player1Ref.current.classList.remove("notActive");
      player1Ref.current.classList.add("active");
    }
  };

  const handleScoreHold = () => {
    if (player1) {
      setScore1((prev) => prev + currentScore1);
      setCurrentScore1(0);
      setPlayer1(!player1);
      setPlayer2(!player2);
      setClicked(!clicked);
      player1Ref.current.classList.remove("active");
      player1Ref.current.classList.add("notActive");
      player2Ref.current.classList.add("active");
    }

    if (player2) {
      setScore2((prev) => prev + currentScore2);
      setCurrentScore2(0);
      setPlayer1(!player1);
      setPlayer2(!player2);
      setClicked(!clicked);
      player2Ref.current.classList.remove("active");
      player1Ref.current.classList.remove("notActive");
      player1Ref.current.classList.add("active");
    }
  };

  const handleReset = () => {
    setCurrentScore1(0);
    setScore1(0);
    setCurrentScore2(0);
    setScore2(0);
    setClicked(!clicked);
    player1 && player1Ref.current.classList.remove("active");
    !player1 && player1Ref.current.classList.remove("notActive");
    player2 && player2Ref.current.classList.remove("active");

    setPlayer1(true);
    setPlayer2(false);
  };
  console.log(player1, player2);
  return (
    <div className='home'>
      <div className='game'>
        <div className='middle'>
          <button className='btnNew' onClick={handleReset}>
            <MdRestartAlt />
            New Game
          </button>
          {clicked && (
            <div className='img'>
              {one && (
                <h5 className='error'>oops!!! you got a one,next player</h5>
              )}
              {!one && <img src={rolledDice} alt='dice' />}
            </div>
          )}
          <div className='middleBottom'>
            <button onClick={handleDiceRoll}>
              <GiPerspectiveDiceSixFacesSix />
              Roll Dice
            </button>
            <button className='btnHold' onClick={handleScoreHold}>
              <TbHandStop />
              Hold
            </button>
          </div>
        </div>
        <div className='left' ref={player1Ref}>
          <div className='leftTop'>
            <h2>Player 1</h2>
            <h3>{score1}</h3>
          </div>
          <div className='current__score'>
            <h4 className='current'>current</h4>
            <h5>{currentScore1}</h5>
          </div>
        </div>
        <div className='right' ref={player2Ref}>
          <div className='rightTop'>
            <h2>Player 2</h2>
            <h3>{score2}</h3>
          </div>
          <div className='current__score'>
            <h4 className='current'>current</h4>
            <h5>{currentScore2}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
