import React, { useContext, useState } from "react";
import { TriviaContext } from "../Context/TriviaGameContext";
// const [lvl, SetLevel] = useState(1);
// const [q, SetQuestion] = useState("");
// const [Answers, SetAnswers] = useState(["", "", "", ""]);
// const [points, SetPoints] = useState(0);
// const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
// const { EditLevel } = useContext(TriviaContext);

const EditLevelModal = () => {


  return (
    <div className="modal">
      {/* <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title"> Edit Level</h4>
        </div>
        <div className="modal-body">
          <form action="">
            <input
              type="number"
              placeholder="Edit Level"
              required
              onChange={(event) => SetLevel(event.target.value)}
              className="inputStyle"
            />

            <input
              type="text"
              placeholder="Edit Question"
              required
              onChange={(event) => SetQuestion(event.target.value)}
              className="inputStyle"
            />
            <input
              type="text"
              placeholder="Edit Answers"
              required
              onChange={(event) => SetAnswers(event.target.value)}
              className="inputStyle"
            />
            <input
              type="number"
              placeholder="Edit Points"
              required
              onChange={(event) => SetPoints(event.target.value)}
              className="inputStyle"
            />
            <button
              type="submit"
              className="submitButtonStyle"
              onClick={EditLevel()}
            >
              Submit
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};
export default EditLevelModal;
