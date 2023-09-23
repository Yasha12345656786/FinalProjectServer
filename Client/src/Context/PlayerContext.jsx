import React from 'react'
import { createContext, useState, useEffect } from "react";

export const PlayerContext = createContext();

export default function PlayerContextProvider({children}) {
    const [player, setPlayer] = useState({});
    const [allplayers, setAllPlayers] = useState([]);


    const GetAll = async () => {
        try {
          let response = await fetch(`https://finalprojectserver.onrender.com/api/player`, {
            method: "GET"
            
          });
          if (response.ok) {
            let data = await response.json();
         
            setAllPlayers(data);
          }
        } catch (error) {}
      };

      const value = {
        player,
        allplayers,
        GetAll
      }
    
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}
