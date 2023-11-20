import React, { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../Context/PlayerContext";


export default function TriviaGameLeaderBoard() {
  const { allPlayers, GetAll } = useContext(PlayerContext);
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    GetAll();
  }, []);

  useEffect(() => {
    const sortedData = allPlayers
      .slice()
      .sort((a, b) => b.triviaScore - a.triviaScore);
    console.log(sortedData);
    setLeaderboardData(sortedData);
  }, [allPlayers]);

  return (
    <>
      <div className="leaderboard-container">
        {leaderboardData.map((data, index) => (
          <div  className="leaderboard-item" key={index}>
            <span className="username">{index+1}. {data.username}</span>
            <span  className="trivia-score">{data.triviaScore}</span>
          </div>
        ))}
      </div>
    </>
  );
}
