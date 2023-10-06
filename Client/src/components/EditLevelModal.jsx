import React from "react";

export default function EditLevelModal() {
  return (
    <div className="modal">
      <div className="modal-content">
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
            <button type="submit"  className="submitButtonStyle">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
