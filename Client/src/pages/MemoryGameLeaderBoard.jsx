import React, { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../Context/PlayerContext";


export default function MemoryGameLeaderBoard() {
  const { allPlayers, GetAll } = useContext(PlayerContext);
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    GetAll();
  }, []);

  useEffect(() => {
    const sortedData = allPlayers
      .slice()
      .sort((a, b) => b.memoryScore - a.memoryScore);
    console.log(sortedData);
    setLeaderboardData(sortedData);
  }, [allPlayers]);

  return (
    <>
           <h1>Memory Game Leaderboard</h1>
      <div className="leaderboard-container">
        {leaderboardData.map((data,index) => (
          <div  className="leaderboard-item" key={index}>
          <span className="username">{index+1}.{data.username}</span>
            <span  className="memory-score">{data.memoryScore}</span>
          </div>
        ))}
      </div>
    </>
  );
}
