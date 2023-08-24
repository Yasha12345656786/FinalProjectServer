import {createContext, useState, useEffect} from "react";
export const MemoryContext = createContext();

export default function MemoryContextProvider({children}){
    const [currentCards, SetCurrentCards] = useState({});
    const [currentLevel, SetCurrentLevel] = useState(0);
    const [currentMoves, SetCurrentMoves] = useState(0);


    const GetNextCards = async () =>{
        try {
            let response = await fetch(`/api/memoryGame/GetNextLevelBylvl/${currentLevel}`);
            if (response.ok) {
                let data = await response.json();
                SetCurrentCards(data);
                
            }
        } catch (error) {
            
        }
    }

    const UpdateScore = async (id,score)=>{
        try {
            let response = await fetch('/api/admin/AddPoints',{
                method:'POST',
                headers:{
                    'Context-Type':'application/json'
                },
                body:JSON.stringify({
                    id:id,
                    type:0,
                    score:score
                })
            });
            if (response.ok) {
                SetCurrentLevel(prev =>+1);
                
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        GetNextCards();
    },[currentLevel]);

    const value = {
        currentCards,
        UpdateScore
    }

    return(
        <MemoryContextProvider value = {value}>
            {children}
        </MemoryContextProvider>
    )
}