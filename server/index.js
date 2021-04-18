const listoftodos = require("./STORE");
const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json()); // Have to use this before routes to parse JSON

app.get("/todos", cors(), function (req, res) {
   res.status(200).send(listoftodos);
});

app.get("/health", function (req, res) {
   res.status(200).send("<h3>Server is healthy</h3>")
});

app.post("/add", cors(), function (req, res) {
   const {id, text, isCompleted} = req.body;
   console.log(req.body);
   listoftodos.push({id, text, isCompleted});
   res.status(200).send(listoftodos);
});

app.post("/update", cors(), function (req, res) {
   const {id, text} = req.body;
   const index = listoftodos.findIndex((todo) => todo.id === id);
   listoftodos[index].text = text;
   res.status(200).send(listoftodos);
});

app.post("/complete", cors(), function (req, res) {
   const {id, isCompleted} = req.body;
   console.log(req.body);
   const index = listoftodos.findIndex((todo) => todo.id === id);
   listoftodos[index].isCompleted = !(isCompleted);
   res.status(200).send(listoftodos);
});

app.get("/delete/:id", cors(), function (req, res) {
   const idToDelete = req.params.id;
   let findToDo = null;
   listoftodos.forEach((item,i) => {
      if (item.id === idToDelete)
      findToDo = i});
      listoftodos.splice(findToDo, 1);
      res.status(200).send(listoftodos);
   });

app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`)
});









/*

 HOMEWORK

  /server

  1. create a route for editing posts (complete and edit text)
  2. create a route to delete a post

  /client

  1. Add appropriate fetch requests to make your todo app to use data from our server
     whenever we need updated data: adding, editing or deleting or initial read

     Example:

        a. initial read - do a fetch
        b. add a post - get data from user, do a post request, have the server add to server todos object
           and return and updated todos array
        c. edit a post (complete or edit text) - get updates from user, do a put request, have the server
           update the todos object and return back the updated todos array
 */

// app.listen on port 8080 (client is running on port 3000)


// setup a script in package.json to execute nodemon to our server file