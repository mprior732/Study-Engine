import React, { Fragment, useState } from "react";

const EditMicroQuestion = ({ row }) => {
  //set state of data that matches the row requested
  const [question, setQuestion] = useState(row.question);
  const [answer, setAnswer] = useState(row.answer);

  //edit function
  const updateQuestion = async (e) => {
    e.preventDefault();

    try {
      //package date
      const body = { question, answer };
      //specify item to edit which compares to the rows id
      const response = await fetch(
        `http://localhost:5000/managebio/${row.micro_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      //refresh after response is sent
      window.location = "/managebio";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#id${row.micro_id}`}
      >
        Edit
      </button>
      <div
        className="modal"
        id={`id${row.micro_id}`}
        onClick={() => {
          setQuestion(row.question);

          setAnswer(row.answer);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Question</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setQuestion(row.question);
                  setAnswer(row.answer);
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="d-flex">
                <textarea
                  type="text"
                  className="form-control"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
              </div>
              <div className="d-flex">
                <div className="mt-2 ml-2 mr-1">Answer</div>
                <input
                  type="text"
                  className="form-control"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={(e) => updateQuestion(e)}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setQuestion(row.question);

                  setAnswer(row.answer);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditMicroQuestion;
