import React from "react";
import "./howTo.css";
import { Link } from "react-router-dom";
const HowTo = () => {
  return (
    <div className='howto'>
      <div className='how'>
        <h2>Rules of the Game</h2>
        <p>
          This is a little web app game designed to show some manipulations of
          the DOM using ReactJS. The game is played by two players, each having
          their respective turns.
        </p>
        <p>
          Player one starts by clicking on the Roll dice button and the value of
          the die he rolls (as long as he doesn't roll a one) would be added to
          his current score.
        </p>
        <p>
          If he rolls a one, all the accumulated score in his current score
          would become zero, but if he doesn't roll a one, he keeps on rolling
          and his scores would be accumulated on the current score board. To
          avoid losing one's score, you are advised to keep your score safe by
          clicking on the Hold Button
        </p>
        <p>
          When a player clicks on the hold button, His accumulated score on the
          current score board gets added to his general score and he
          automatically forfeits his turn to the next player
        </p>
        <p>
          The game continues till the first player to accumulate up to a
          100points in the General Score board, once this happens, the first
          player to reach 100 points wins the game.
        </p>
        <p>
          The game can also be reseted by clicking on the New game button and
          all scores will be set to zero
        </p>
      </div>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default HowTo;
