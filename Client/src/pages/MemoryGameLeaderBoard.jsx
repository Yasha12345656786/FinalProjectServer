import React, { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../Context/PlayerContext";

export default function MemoryGameLeaderBoard() {
  const { allplayers, GetAll } = useContext(PlayerContext);
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    GetAll();
  }, []);

  useEffect(() => {
    const sortedData = allplayers
      .slice()
      .sort((a, b) => b.memoryScore - a.memoryScore);
    console.log(sortedData);
    setLeaderboardData(sortedData);
  }, [allplayers]);
  debugger;
  return (
    <>
      <div>
        {leaderboardData.map((data) => (
          <div>
            {/* {data.username}
            {data.memoryScore} */}
          </div>
        ))}
      </div>
    </>
  );
}
