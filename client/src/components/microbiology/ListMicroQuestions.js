import React, { Fragment, useEffect, useState } from "react";

import EditMicroQuestion from "./EditMicroQuestion";

const ListMicroQuestions = () => {
  //set the state of our data rows for mapping
  const [rows, setRows] = useState([]);

  //delete function
  const deleteQuestion = async (id) => {
    try {
      //specify which item to delete based on id
      const deleteQuestion = await fetch(
        `http://localhost:5000/managebio/${id}`,
        {
          method: "DELETE",
        }
      );

      //set condition to return all ids except the deleted on
      setRows(rows.filter((row) => row.micro_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMicroQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5000/managebio");

      //parse the json data
      const jsonData = await response.json();

      setRows(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //fetch request from api
  useEffect(() => {
    getMicroQuestions();
  }, []);

  console.log(rows);
  return (
    <Fragment>
      <table className="table mt-3 text-center table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {rows.map((row) => {
            return (
              <tr key={row.micro_id}>
                <td>{row.question}</td>
                <td>{row.answer}</td>
                <td>
                  <EditMicroQuestion row={row}></EditMicroQuestion>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteQuestion(row.micro_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListMicroQuestions;
