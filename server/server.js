//import libraries
const express = require("express");
const cors = require("cors");
const client = require("./db");
const { request } = require("express");
//run express library
const app = express();

//middleware
app.use(cors());
//set up json to use req.body
app.use(express.json());

//*********ROUTES*******//

//*********Microbiology API*********/

//create a question
app.post("/microlist", async (req, res) => {
  try {
    const { question, answer } = req.body;

    //set query to add question to the micro_bio table
    const newQuestion = await client.query(
      "INSERT INTO micro_bio(question, answer) VALUES($1, $2) RETURNING *",
      [question, answer]
    );

    //close and display added row data for test cases
    res.json(newQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all questions
app.get("/managebio", async (req, res) => {
  try {
    //set query to show everything in the micro_bio table
    const getAllMicroQuestions = await client.query(
      "SELECT * FROM micro_bio ORDER BY micro_id DESC"
    );

    //close and display rows for test cases
    res.json(getAllMicroQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a question
app.get("/managebio/:id", async (req, res) => {
  try {
    //set id as the parameter
    const { id } = req.params;
    //retrieve a single question based on id
    const getMicroQuestion = await client.query(
      "SELECT * FROM micro_bio WHERE micro_id = $1",
      [id]
    );

    //close and display requested question for test cases
    res.json(getMicroQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a question
app.put("/managebio/:id", async (req, res) => {
  try {
    //set id as the parameter
    const { id } = req.params;
    const { question, answer } = req.body;
    //update a table row based on the id
    const updateMicroQuestion = await client.query(
      "UPDATE micro_bio SET question = $1, answer = $2 WHERE micro_id = $3",
      [question, answer, id]
    );
    //close and display update message for test cases
    res.json("Question updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a question
app.delete("/managebio/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMicroQuestion = await client.query(
      "DELETE FROM micro_bio WHERE micro_id = $1",
      [id]
    );

    //close and display delete message for test cases
    res.json("Question deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
