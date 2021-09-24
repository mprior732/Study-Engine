import React, { Fragment, useState } from "react";

const InputMicroQuestion = () => {
  //set the state of our data
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  //function to send the data out
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      //package the data
      const body = { question, answer };
      const response = await fetch("http://localhost:5000/microlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      //refresh after response is sent
      window.location = "/managebio";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <a className="btn btn-warning btn-sm float-left mt-2" href="/">
        <b>back</b>
      </a>
      <h1 className="text-center mt-3">Manage Microbiology Questions</h1>
      <form className="mt-2" onSubmit={onSubmitForm}>
        <div className="d-flex">
          <textarea
            type="text"
            className="form-control"
            placeholder="Add A New Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></input>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </Fragment>
  );
};

export default InputMicroQuestion;
