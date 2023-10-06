import React from "react";

export default function AddLevel() {
  return (
    <div>
      <h1>Add Level</h1>

      <form>
        <input
          type="number"
          placeholder="Level"
          required
          onChange={(event) => SetLevel(event.target.value)}
          className="inputStyle"
        />

        <input
          type="text"
          placeholder="Enter Question"
          required
          onChange={(event) => SetQuestion(event.target.value)}
          className="inputStyle"
        />
        <input 
          type="text"
          placeholder="Enter Answers"
          required
          onChange={(event) => SetAnswers(event.target.value)}
          className="inputStyle"
        />
         <input 
          type="number"
          placeholder="Enter Points"
          required
          onChange={(event) => SetPoints(event.target.value)}
          className="inputStyle"
        />
        <button type="submit"  className="submitButtonStyle">Submit</button>
      </form>
    </div>
  );
}
