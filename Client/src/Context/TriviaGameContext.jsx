import {createContext, useState, useEffect} from "react";
export const TriviaContext = createContext();

export default function TriviaContextProvider({children}){

    const [currentQuestion, SetCurrentQuestion] = useState({});
    const [currentLevel, SetCurrentLevel] = useState(0);
    const [currentAnswers, SetCurrentAnswers] = useState([]);

    const GetNextQuestion = async () =>{
        try {
            let response = await fetch(`/api/triviaGame/GetNextLevelBylvl/${currentLevel}`);
            if (response.ok) {
                let data = await response.json();
                SetCurrentQuestion(data);
                
            } 
        } catch (error) {
            
        }
    }
    const GetNextAnswers = async () =>{
        try {
            let response= await fetch(`/api/triviaGame/GetNextLevelBylvl/${currentLevel}`);
            if (response.ok) {
                let data = await response.json();
                SetCurrentAnswers(data);
                
            }
        } catch (error) {
            
        }
    }


    const UpdateScore = async (id,score) =>{
        try {
            let response = await fetch('/api/admin/AddPoints',{
                method:'POST',
                headers:{
                    'Context-Type':'application/json'
                },
                body:JSON.stringify({
                    id:id,
                    type:1,
                    score:score
                })
            });
            if (response.ok) {
                SetCurrentLevel(prev => +1);
                
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        GetNextQuestion();
        GetNextAnswers();
    }, [currentLevel]);

    const value = {
        currentQuestion,
        currentAnswers,
        UpdateScore
    }

    return(
        <TriviaContextProvider value = {value}>
            {children}
        </TriviaContextProvider>
    )

}