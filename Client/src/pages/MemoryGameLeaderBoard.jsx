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
      <div className="leaderboard-container">
        {leaderboardData.map((data) => (
          <div  className="leaderboard-item" key={index}>
          <span className="username">{index}. {data.username}</span>
            <span  className="memory-score">{data.memoryScore}</span>
          </div>
        ))}
      </div>
    </>
  );
}
